class CreateCambioStores < ActiveRecord::Migration[5.2]
  def change
    create_table :cambio_stores do |t|
      t.string :moeda

      t.timestamps
    end
  end
end
