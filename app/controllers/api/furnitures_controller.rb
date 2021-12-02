class Api::FurnituresController < ApplicationController
  def index
      @furnitures = Furniture.all
      render :index
  end

  def show
      @furniture = Furniture.find_by(id: params[:id])
      if @furniture
          render :show
    else
          render json: @furniture.errors.full_messages, status: 404
      end
  end

  private
  def furniture_params
    params.require(:furniture).permit(:name, :color, :category, :price, :description)
  end
end

