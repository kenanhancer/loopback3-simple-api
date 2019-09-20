'use strict';

//Async Version
module.exports = async function (app) {
  await app.dataSources.mysqlDs.automigrate('coffeeShopMySql');

  const columns = await app.dataSources.mysqlDs.columnNames('coffeeShopMySql');

  console.log('All columns: ', columns);

  const coffeeShops = await app.models.coffeeShopMySql.create([{
    name: 'Bel Cafe',
    city: 'Vancouver',
  }, {
    name: 'Three Bees Coffee House',
    city: 'San Mateo',
  }, {
    name: 'Caffe Artigiano',
    city: 'Vancouver',
  }]);

  console.log('MySQL Models created: \n', coffeeShops);
};

//Sync Version
// module.exports = function (app) {

//   app.dataSources.mysqlDs.automigrate('coffeeShop', function (err) {
//     if (err) throw err;

//     app.models.coffeeShop.create([{
//       name: 'Bel Cafe',
//       city: 'Vancouver',
//     }, {
//       name: 'Three Bees Coffee House',
//       city: 'San Mateo',
//     }, {
//       name: 'Caffe Artigiano',
//       city: 'Vancouver',
//     }],
//       function (err, coffeeShops) {
//         if (err) throw err;

//         console.log('Models created: \n', coffeeShops);
//       });

//   });

// };
