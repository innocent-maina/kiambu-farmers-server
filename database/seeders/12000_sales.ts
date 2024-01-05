import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SalesFactory } from 'Database/factories/SalesFactory'

export default class SalesSeeder extends BaseSeeder {
  public async run() {
    await SalesFactory.with('user', 5).createMany(5)
  }
}