class Api::UsersController < ApplicationController
  # before_action :require_logged_in, only: [:destroy, :update]



  def create
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 406
      # render json: ["input Username and/or Password"], status: 401
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

  def update
    @user = User.find_by(id: params[:id])
    if @user.nil? 
      render json: ["No Known User"], status: 400
    elsif @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user 
      @user.destroy
      render :show
    else
      render json: @user.errors.full_messages, status: 405
    end

  end


  private 

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end

end