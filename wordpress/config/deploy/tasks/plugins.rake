namespace :plugins do
  # desc "Reconnect symlinks to latest version of directories"
  task :install do
    on roles(:web) do
      execute "bash #{release_path}/wordpress/install_plugins.sh"
    end
  end
end