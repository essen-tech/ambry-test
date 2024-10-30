

set :db_remote_name, fetch(:db_remote_name, 'wholesum-wp')
set :db_remote_backup_path, ->{ "#{shared_path}/backups" }
set :db_remote_backup_command, ->{ "mysqldump -h$WORDPRESS_DB_HOST -u$WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD " + fetch(:db_remote_name) + " | gzip > " + fetch(:db_remote_backup_path) }
set :db_remote_backup_limit, fetch(:db_remote_backup_limit, 5)

set :db_local_user, fetch(:db_local_user, 'root')
set :db_local_password, fetch(:db_local_password, 'root')
set :db_local_name, fetch(:db_local_name, 'wholesum')

set :local_backup_path, fetch(:local_backup_path, '../backups')

namespace :db do
  desc "Backup, pull and push database"
  namespace :backup do

    desc "Create a database dump and store it on the remote server."
    task :create do
      invoke 'db:remote:create_backup'
    end

    desc "Clean up all remote database backups."
    task :cleanup do
      invoke 'db:remote:cleanup_backups'
    end

  end

  desc "Create a copy of the remote database and download it."
  task :pull do
    invoke 'db:backup:create'
    invoke 'db:remote:download'
  end

  desc <<-EOS
    Push the local database to the remote (NOTE: Use with care).
    Performs the following tasks:
    * Creates a local backup
    * Uploads it to the remote and imports it
    * Performs a search and replace for the URL
  EOS
  task :push do
    set(:confirmed) do
      puts <<-WARN
      ========================================================================
        WARNING: This will overwrite any preexisting database on the remote
      ========================================================================
      WARN
      puts "Type the name of the database dump you want to push (in the backups folder)"
      set :backups_dir, Dir.pwd + '/backups/'
      ask(:path, '')
      set :file_exist, File.file?(fetch(:backups_dir) + fetch(:path))
      if fetch(:file_exist) then true else false end
    end

    if (fetch(:confirmed))
      set :can_do_upload, true
      invoke 'db:remote:upload'
    else
      unless fetch(:file_exist)
        puts "Could not find database dump. Aborting."
      end
    end
  end

  # Internal tasks
  namespace :remote do
    # Creates a database dump remotely
    task :create_backup do
      on roles(:all) do
        execute "mkdir -p " + fetch(:db_remote_backup_path)
        backup_file = fetch(:db_remote_name) + '-' + Time.now.utc.strftime("%y%m%d_%H%M%S") + ".sql.gz"
        execute fetch(:db_remote_backup_command) + "/" + backup_file
      end
      #invoke 'db:remote:remove_old_backups'
    end

    # Removes all database backups remotely
    task :cleanup_backups do
      on roles(:all) do
        execute "rm -f " + fetch(:db_remote_backup_path) + "/*.sql.gz"
      end
    end

    # Removes all databases exceeding limit remotely
    task :remove_old_backups do
      on roles(:all) do
        available_backups = capture "cd " + fetch(:db_remote_backup_path) + "; ls -x *.sql.gz"
        available_backups = available_backups.split.sort
        c = available_backups.count
        while c > fetch(:db_remote_backup_limit) do
          execute 'rm ' + fetch(:db_remote_backup_path) + '/' + available_backups.first
          available_backups = available_backups.drop(1)
          c -= 1
        end
      end
    end

    # Creates and download a database dump remotely
    task :download do
      invoke 'db:remote:create_backup'
      on roles(:all) do
        available_backups = capture "cd " + fetch(:db_remote_backup_path) + "; ls -x *.sql.gz"
        latest_backup = available_backups.split.sort.last
        run_locally do
          execute 'mkdir -p ' + fetch(:local_backup_path)
        end
        download! fetch(:db_remote_backup_path) + '/' + latest_backup, fetch(:local_backup_path) + '/' + latest_backup
      end
    end

    # Upload a database dump and import it to the remote database
    # Can only be run from db:push due to :can_do_upload
    task :upload do
      puts "uploading"
      if fetch(:can_do_upload, false) then
        invoke 'db:remote:create_backup'
        on roles(:all) do
          execute "mkdir -p " + fetch(:db_remote_backup_path)
          puts "created backups remote folder"
          upload! (fetch(:backups_dir) + fetch(:path)), fetch(:db_remote_backup_path)
          file_name = File.basename fetch(:path)
          file_path = fetch(:db_remote_backup_path) + "/" + file_name
          puts file_path
          execute "mysql -h$WORDPRESS_DB_HOST -u$WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD -e 'DROP DATABASE `" + fetch(:db_remote_name) + "`'"
          execute "mysql -h$WORDPRESS_DB_HOST -u$WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD -e 'CREATE DATABASE `" + fetch(:db_remote_name) + "`'"
          execute "mysql -h$WORDPRESS_DB_HOST -u$WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD " + fetch(:db_remote_name) + " < " + file_path
          # execute "rm " + file_path
          # execute fetch(:db_remote_backup_path) + "/" + "rm *.gz"
        end
      end
    end

  end
end