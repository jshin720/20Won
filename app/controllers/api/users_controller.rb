class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if params[:user][:password] 
            render json: ['Input passwords do not match.'], status: 401
        elsif @user.save 
            login!(@user)
            @cart = Cart.new(user_id: @user.id)
            @cart.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user.find_by(username: params[:username])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password)
    end
end