import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contact extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('description')
      table.integer('stock_quantity')
      table.integer('units_sold')
      table.integer('price')
      table.text('image_url')
      table.integer('seller_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('product_categories')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
