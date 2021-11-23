class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            render json: ['Incorrect email or password.'], status: 401
        else
            if @user.cart == nil 
                @cart = Cart.new(user_id: @user.id)
                @cart.save
            end
            login(@user)
            render '/api/users/show'
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
        else
            render json: ['No user signed in.'], status: 404
        end
    end
end