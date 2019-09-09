class CreateDoodleimages < ActiveRecord::Migration[5.2]
  def change
    create_table :doodleimages do |t|
      t.string :title
      t.string :image
      t.string :message
      t.string :shareurl
      t.references :doodleuser, foreign_key: true

      t.timestamps
    end
  end
end
