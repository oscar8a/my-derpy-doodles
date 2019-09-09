class CreateDoodleusers < ActiveRecord::Migration[5.2]
  def change
    create_table :doodleusers do |t|
      t.string :name

      t.timestamps
    end
  end
end
