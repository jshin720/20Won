class Api::OrdersController < ApplicationController
  # before_action :require_login, only: [:show]
  def index
    @orders = User.find(current_user.id).orders 
    render :index

  end

  def create
    @user = User.find(current_user.id)
    orders = @user.orders
    if !orders.empty? 
      furniture_id = order_params[:furniture_id].to_i
      order = orders.select{ |order| order.furniture_id == furniture_id}
      if !order.empty? 
        @order = order[0]
        
        @order.quantity += order_params[:quantity].to_i
      else
        @order = Order.new(order_params)
      end
    else 
      @order = Order.new(order_params)
    end
    
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
      @order.quantity += params[:quantity]
      @order.save
      # @order.update(order_params)
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
