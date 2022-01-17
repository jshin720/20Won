Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json } do
    resources :users, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :furnitures, only: [:create, :show, :index, :destroy, :update] do 
      resources :reviews, only: [:create, :index, :show, :destroy, :update]
    end
    resources :orders, only: [:create, :show, :update, :destroy, :index]
  end  

  root to: 'static_pages#root'  
end