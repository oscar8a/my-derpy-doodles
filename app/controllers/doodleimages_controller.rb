class DoodleimagesController < ApplicationController
    before_action :set_image, only: [:show, :update, :destroy]
    
    def index
        images = Doodleimage.all
        render json: images
    end

    def show
        #@image=Doodleimage.find(params[:id])
        render json: {
                    title: @image.title, 
                    image: @image.image,
                    doodleuser_id: @image.doodleuser_id

                }
    end

    def create
        
        image = Doodleimage.create(image_params)

        if image.valid?
            render json: image
        else
            render json: {errors: image.errors}
        end

    end

    def update

    end

    def destroy
        @image.destroy
        render json: {worked: true}
    end


    private
    def set_image
     @image = Doodleimages.find(params[:id])
    end
    
    def image_params
        params.permit(:doodleuser_id, :title, :message, :image)
    end
end
