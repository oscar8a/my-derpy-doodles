class DoodleimagesController < ApplicationController
    def index
        images = Doodleimage.all
        render json: images
    end

    private
    def set_image
     @image = Doodleimages.find(params[:id])
    end
    
    def images_params
    params.permit!
    end
end
