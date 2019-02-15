Rails.application.routes.draw do
  resources :articles
  get '/dashboard' => 'dashboard#index'
  namespace :api do
    namespace :v1 do
      resources :articles, only: %i[index show]
    end
  end
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    unlocks: 'users/unlocks'
  }
  devise_scope :user do
    get '/login' => 'users/sessions#new'
    get '/register' => 'users/registrations#new'
    get '/settings' => 'users/registrations#edit'
  end
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
