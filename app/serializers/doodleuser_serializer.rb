class DoodleuserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :doodleimages
end
