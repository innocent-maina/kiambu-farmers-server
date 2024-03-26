import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Crop from 'App/Models/Crops'

export default class CropSeeder extends BaseSeeder {
  public async run() {
    await Crop.createMany([
      {
        name: 'Maize',
        variety: 'Hybrid',
        planted_date: new Date('2023-03-01'),
        harvest_date: new Date('2023-07-01'),
        actual_yield: 10000,
        amount_profit: 'High',
        comments: 'Good crop yield this season',
      },
      {
        name: 'Wheat',
        variety: 'Red Winter Wheat',
        planted_date: new Date('2023-10-01'),
        harvest_date: new Date('2024-05-01'),
        actual_yield: 8000,
        amount_profit: 'Moderate',
        comments: 'Some pest issues encountered during growth',
      },
      {
        name: 'Rice',
        variety: 'Basmati',
        planted_date: new Date('2023-06-01'),
        harvest_date: new Date('2023-10-01'),
        actual_yield: 6000,
        amount_profit: 'High',
        comments: 'Good water management resulted in excellent yield',
      },
      {
        name: 'Soybeans',
        variety: 'GMO',
        planted_date: new Date('2023-04-01'),
        harvest_date: new Date('2023-08-01'),
        actual_yield: 7500,
        amount_profit: 'High',
        comments: 'Soybeans performed well in rotation with maize',
      },
      {
        name: 'Barley',
        variety: 'Malting Barley',
        planted_date: new Date('2023-09-01'),
        harvest_date: new Date('2024-03-01'),
        actual_yield: 7000,
        amount_profit: 'Moderate',
        comments: 'Used for brewing purposes',
      },
      {
        name: 'Potatoes',
        variety: 'Russet Burbank',
        planted_date: new Date('2023-11-01'),
        harvest_date: new Date('2024-06-01'),
        actual_yield: 12000,
        amount_profit: 'High',
        comments: 'Storage potatoes with good market demand',
      },
      {
        name: 'Tomatoes',
        variety: 'Roma',
        planted_date: new Date('2023-02-01'),
        harvest_date: new Date('2023-06-01'),
        actual_yield: 9000,
        amount_profit: 'High',
        comments: 'Grown in greenhouse for better control over pests',
      },
    ])
  }
}