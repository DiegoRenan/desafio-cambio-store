Rails.application.routes.draw do
  root 'cambio_stores#index'
  post '/moeda', to: 'cambio_stores#moeda'
end
