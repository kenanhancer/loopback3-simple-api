'use strict';

//Async Version
module.exports = async function (app) {
  await app.dataSources.oracleDs.automigrate('coffeeShopOracle');

  const coffeeShops = await app.models.coffeeShopOracle.create([{
    name: 'Bel Cafe',
    city: 'Vancouver',
  }, {
    name: 'Three Bees Coffee House',
    city: 'San Mateo',
  }, {
    name: 'Caffe Artigiano',
    city: 'Vancouver',
  }]);

  console.log('Oracle Models created: \n', coffeeShops);
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
