# config valid for current version and patch releases of Capistrano
lock "~> 3.14.1"

set :application, 'wholesum'
set :theme_name, 'application'
set :deploy_user, 'ubuntu'
set :deploy_to, "/var/www/html/#{fetch(:application)}"
set :tmp_dir, "/home/#{fetch(:deploy_user)}/tmp"
set :pty, true
set :ssh_options, {
  forward_agent: false,
  auth_methods: %w[publickey],
  keys: %w[~/.ssh/wholesum-development.pem]
}


# custom local DB backups folder
set :local_backup_path, 'backups'


# setup repo details
set :repo_url, 'git@github.com:esseninternational/Wholesome'
set :deploy_via, :remote_cache

# how many old releases do we want to keep
set :keep_releases, 5

namespace :deploy do
  # after :finishing, 'plugins:install'
  after :finishing, 'symlink_directories:update'
  after :finishing, 'deploy:cleanup'
  
  # As of Capistrano 3.1, the `deploy:restart` task is not called
  # automatically.
  after 'deploy:publishing', 'deploy:restart'
end