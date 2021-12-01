class Api::SessionsController < ApplicationController
  

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Incorrect email or password.'], status: 401
    else
      login(@user)
      render '/api/users/show'
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: ["Successfully logged out"]
    else
      render json: ['No user signed in.'], status: 404
    end
  end
end