Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'  

  namespace :api, defaults: {format: :json } do
    resources :users, only: [:create, :show, :destroy, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :furnitures, only: [:show, :index] do 
      resources :reviews, only: [:create, :index, :show, :destroy, :update]
    end
    resources :orders, only: [:create, :show, :update, :destroy, :index]
  end  

end