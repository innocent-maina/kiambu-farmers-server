import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sales from 'App/Models/Sales'

export default class SalesSeeder extends BaseSeeder {
  public async run() {
    await Sales.createMany([
      {
        id: 1,
        payment_transaction_id: '70702660',
        payment_method: 'mobile_money',
        date: '2024-10-26 14:38:33.876',
        comments: 'Tergo vere caelestis taceo praesentium thalassinus sequi adficio.',
        total_amount: 399.7,
        farmer_id: 1,
        product_id: 7,
        units_sold: 1,
        payment_status: 'paid',
      },
      {
        id: 2,
        payment_transaction_id: '70702661',
        payment_method: 'deposit',
        date: '2024-10-27 14:38:33.876',
        comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        total_amount: 99.99,
        farmer_id: 1,
        product_id: 8,
        units_sold: 2,
        payment_status: 'pending',
      },
      {
        id: 3,
        payment_transaction_id: '70702662',
        payment_method: 'bank_transfer',
        date: '2024-10-28 14:38:33.876',
        comments: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        total_amount: 149.5,
        farmer_id: 1,
        product_id: 9,
        units_sold: 3,
        payment_status: 'paid',
      },
      {
        id: 4,
        payment_transaction_id: '70702663',
        payment_method: 'deposit',
        date: '2024-10-29 14:38:33.876',
        comments: 'Vivamus vel sapien at neque fringilla efficitur.',
        total_amount: 79.8,
        farmer_id: 5,
        product_id: 7,
        units_sold: 4,
        payment_status: 'pending',
      },
      {
        id: 5,
        payment_transaction_id: '70702664',
        payment_method: 'deposit',
        date: '2024-10-30 14:38:33.876',
        comments: 'Duis egestas semper magna ut volutpat.',
        total_amount: 199.99,
        farmer_id: 5,
        product_id: 6,
        units_sold: 5,
        payment_status: 'paid',
      },
      {
        id: 6,
        payment_transaction_id: '70702665',
        payment_method: 'deposit',
        date: '2024-10-31 14:38:33.876',
        comments: 'Quisque dignissim nisl in fermentum tempor.',
        total_amount: 109.75,
        farmer_id: 5,
        product_id: 5,
        units_sold: 6,
        payment_status: 'pending',
      },
      {
        id: 7,
        payment_transaction_id: '70702666',
        payment_method: 'bank_transfer',
        date: '2024-11-01 14:38:33.876',
        comments:
          'Nam euismod, nulla nec varius interdum, eros odio mattis lacus, sit amet hendrerit justo lorem sit amet tortor.',
        total_amount: 89.95,
        farmer_id: 5,
        product_id: 4,
        units_sold: 7,
        payment_status: 'paid',
      },
      {
        id: 8,
        payment_transaction_id: '70702667',
        payment_method: 'bank_transfer',
        date: '2024-11-02 14:38:33.876',
        comments: 'Nulla facilisi. Pellentesque a magna sit amet ante vehicula tincidunt.',
        total_amount: 39.99,
        farmer_id: 5,
        product_id: 3,
        units_sold: 8,
        payment_status: 'pending',
      },
      {
        id: 9,
        payment_transaction_id: '70702668',
        payment_method: 'bank_transfer',
        date: '2024-11-03 14:38:33.876',
        comments: 'Fusce suscipit nunc vel libero mollis, sit amet venenatis leo interdum.',
        total_amount: 299.5,
        farmer_id: 3,
        product_id: 2,
        units_sold: 9,
        payment_status: 'paid',
      },
      {
        id: 10,
        payment_transaction_id: '70702669',
        payment_method: 'mobile_money',
        date: '2024-11-04 14:38:33.876',
        comments: 'Proin nec quam in dui consequat malesuada.',
        total_amount: 79.8,
        farmer_id: 3,
        product_id: 1,
        units_sold: 10,
        payment_status: 'pending',
      },
    ])
  }
}
