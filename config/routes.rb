Rails.application.routes.draw do
  get 'home/potd'
  root 'home#index'
  get 'home/planets'
end