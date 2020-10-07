const mongoose = require('mongoose');
// mongoose.(enter your database connection)


const productSchema = new mongoose.Schema({
    name: String,
    url: String,
    price: Number
});

module.exports = {
    getModel: function(name) {
        return mongoose.model(name, productSchema);
    },
    getData: function(model, next) {
        model.find({}, next); 
        
    },
    sendData: function(model, next) {
        model.create(model, next);
    }
}
/* module.exports = {
    getModel: function(name) {
        return mongoose.model(name, productSchema);
    },
    getData: function(model) {
        model.find({}, (err, products) => {
            if (err) {
                console.log(err);
            } else {
                return products;
            }
        }); 
        
    }
} */

