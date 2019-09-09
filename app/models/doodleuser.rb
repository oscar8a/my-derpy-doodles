class Doodleuser < ApplicationRecord
    validates :name, presence: true
    has_many :doodleimages 

    
end
