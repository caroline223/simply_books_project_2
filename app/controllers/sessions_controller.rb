class SessionsController < ApplicationController
    
    skip_before_action :authorize, only: :create

    #post '/login'

    def create
        user = User.find_by_username(params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end

    #delete '/logout'

    def destroy
        session.delete :user_id
        head :no_content
    end
    

end
