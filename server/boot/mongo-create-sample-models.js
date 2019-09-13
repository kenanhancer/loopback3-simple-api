'use strict';
var util = require('util');

module.exports = function (app) {
    var db = app.dataSources.mongodbDs;
    var coffeeShopMongodb = app.models.coffeeShopMongodb;

    db.automigrate(function (err) {
        if (err) throw err;
        console.log('Automigrate complete');

        coffeeShopMongodb.create([{
            name: 'Bel Cafe',
            city: 'Vancouver',
        }, {
            name: 'Three Bees Coffee House',
            city: 'San Mateo',
        }, {
            name: 'Caffe Artigiano',
            city: 'Vancouver',
        }], function (err, result) {
            if (err) throw err;
            console.log('\nCreated instances of coffeeShopMongodb: ' + util.inspect(result, 4));

            coffeeShopMongodb.find({
                where: {
                    name: "Caffe Artigiano"
                }
            },
                function (err, result) {
                    if (err) throw err;
                    console.log('\nFound instance with inq: ' + util.inspect(result, 4));
                });
        });
    });
};

function createCoffeeShops(cb) {
    mysqlDs.automigrate('CoffeeShop', function(err) {
      if (err) return cb(err);
      var CoffeeShop = app.models.CoffeeShop;
      CoffeeShop.create([{
        name: 'Bel Cafe',
        city: 'Vancouver'
      }, {
        name: 'Three Bees Coffee House',
        city: 'San Mateo'
      }, {
        name: 'Caffe Artigiano',
        city: 'Vancouver'
      }, ], cb);
    });
  }