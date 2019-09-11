class DoodleusersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        #byebug
        users = Doodleuser.all
        render json: DoodleuserSerializer.new(users)
    end

    def show
        #@user = Doodleuser.find(params[:id])
        #image = Doodleimage.find(params[:id])
        render json: DoodleuserSerializer.new(@user)
    end

    def create 
        user = Doodleuser.new(user_params)

        if user.save
            render json: user
        else
            render json: {errors: user.errors}
        end
    end

    def destroy
        @user.destroy
        render json: {worked: true}
    end

    private
    def set_user
     @user = Doodleuser.find(params[:id])
    end
    
    def user_params
    params.permit(:name)
    end
end
