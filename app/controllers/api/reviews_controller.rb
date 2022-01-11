class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :destroy, :update]

  def show
    @review - Review.find_by(reviewer_id: current_user.id)
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else 
      render json: @review.errors.full_messages, status: 412
    end
  end

  def index
    @reviews = Review.all
    render :index
  end

  def destroy
    @review = Review.find_by(reviewer_id: current_user.id)
    if @review
      @review.destroy
    else 
      render json: @review.errors.full_messages, status: 404
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review && @review.update(review_params)
        render :show
    else
        render json: @review.errors.full_messages, status: 400
    end
  end

  private
  def review_params
    params.require(:review).permit(:id, :title, :reviewer_id, :furniture_id, :body, :stars)
  end
end
