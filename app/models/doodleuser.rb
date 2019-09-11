class Doodleuser < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    has_many :doodleimages 

    
end
