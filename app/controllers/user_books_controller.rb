class UserBooksController < ApplicationController

     #before_action :check_authorization
   
    def index
        render json: @current_user.user_books, status: :ok
    end
    
    def create 
        @current_user.user_books.create(book_id: params[:book_id])
    end

    def show
        user_book = find_user_book
        render json: user_book, status: :ok
    end

    def update
        user_book = find_user_book
        user_book.update(user_book_params)
        render json: user_book, status: :ok
    end

    def destroy
        book = find_user_book
        book.destroy
        head :no_content
    end

    private

    def find_user_book
        @current_user.user_books.find_by(id: params[:id])
    end

    def user_book_params
        params.permit(:id, :read, :consider, :book_id, :user_id)
    end

    private

    # def check_authorization
    #     return render json: {error: "Must be logged in to see this."}, status: :unauthorized unless current_user
    # end
    
end
