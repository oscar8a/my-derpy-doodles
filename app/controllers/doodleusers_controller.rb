class DoodleusersController < ApplicationController
    def index
        users = Doodleuser.all
        render(json: users)
    end

    def new

    end

    def create 

    end

end
