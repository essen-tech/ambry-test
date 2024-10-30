set :stage, :development
set :branch, "master"
set :db_remote_name, 'wholesum-wp'

set :server_name, "34.245.102.35"
set :branch, 'development'

server '34.245.102.35', user: "#{fetch(:deploy_user)}", roles: %w{web app db}, primary: true

set :deploy_to, "#{fetch(:deploy_to)}"

set:shared_path,   "#{deploy_to}/shared"
set:current_path,  "#{deploy_to}/current"

set(:symlink_resource_directories, [
  {
    theme_name: "swace-digital",
    directory: "#{deploy_to}/wp-content",
    name: 'themes',
    target: "#{release_path}/wordpress",
  },
])

# dont try and infer something as important as environment from
# stage name.
set :rails_env, :development