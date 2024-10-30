namespace :symlink_directories do
  # desc "Reconnect symlinks to latest version of directories"
  task :update do
    fetch(:symlink_resource_directories).each do |settings|
      name = "#{settings[:directory]}/#{settings[:name]}"
      target = "#{settings[:target]}/#{settings[:name]}"
      on roles(:web) do
        execute "rm -rf #{name}"
        execute "ln -sfv #{target} #{name}"
      end
    end
  end
end