class DoodleimagesController < ApplicationController
    def index
        images = Doodleimage.all
        render(json: images) 
    end
end
