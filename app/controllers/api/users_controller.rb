class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show
    else
      render json: ["input Username and/or Password"], status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['there is no user'], status: 401
    end
  end

  private 

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end

end