// Use the controller to request different productsb
// based off of the categories in the routes array
const {getData, sendData} = require('../services/products');
// const mongoose = require('mongoose');


// const Fashion = getModel('Fashion');

const controller = {
    theData: function(req, res, category) {
        getData(category, (err, products) => {
            if (err) {
                console.log(err);
            } else {
                // res.header("Access-Control-Allow-Origin", "*");
                // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.json(products);
            }
        });
    },
    postData: function(req, res, category) {
        sendData(category, (err, products) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully sent');
            }
        })
    }
}

module.exports = controller;
