Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/login' => 'devise/sessions#new'
    get '/register' => 'devise/registrations#new'
    get '/settings' => 'devise/registrations#edit'
  end
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
