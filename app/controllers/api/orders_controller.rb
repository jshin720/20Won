class Api::OrdersController < ApplicationController
  # before_action :require_login, only: [:show]

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages
    end
  end

  def show
    @order = Order.find_by(user_id: current_user.id)
    if @order
      render :show
    else
        render json: ["No orders available"]
    end
  end

  def update
    @order= Order.find_by(id: params[:id])
    if @order 
      @order.update(order_params)
      render :show
    else
      render json: @order.errors.full_messages, status: 404
    end
  end

  def destroy
    @order = Order.find(params[:id])
    @order.destroy
  end

  private
  def order_params 
    params.require(:order).permit(:user_id, :furniture_id, :quantity)
  end

end
