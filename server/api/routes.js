const validEndpoints = ['fashion', 'eyewear', 'watches', 'fragrance', 'skincare', 'makeup', 'jewelry'];
const controller = require('./controller');
const {getModel} = require('../services/products');

const Fashion = getModel('fashion');
const Eyewear = getModel('eyewear');
const Watches = getModel('watches');
const Fragrance = getModel('fragrance');
const Skincare = getModel('skincare');
const Makeup = getModel('makeup');
const Jewelry = getModel('jewelry');

const models = [Fashion.modelName.toLowerCase(), Eyewear.modelName.toLowerCase(), Watches.modelName.toLowerCase(), Fragrance.modelName.toLowerCase(), Skincare.modelName.toLowerCase(), Makeup.modelName.toLowerCase(), Jewelry.modelName.toLowerCase()];
// const lowercase = 

function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    // Read 
    app.get('/not-found', (req, res) => {
        res.send('endpoint does not exist');
    });

    app.get('/:category', (req, res) => {
        const category = req.params.category;
        if (validEndpoints.includes(category) && models.includes(category)) {
            // res.send(`You reached the ${category} endpoint array`);
            // console.log();
            controller.theData(req, res, getModel(category));
        } else {
            res.redirect('/not-found');
        }
    });

    app.post('/:category', (req, res) => {
        // const category = req.body.;
        // if (validEndpoints.includes(category) && models.includes(category)) {
        //     controller.postData(req, res, getModel(category));
        // } else {
        //     res.redirect('/not-found');
        // }
        const category = req.params.category;
        /* const name = req.body.pname;
        const url = req.body.url;
        const price = req.body.price;
        const product = {name: name, url: url, price: price}; */
        if (validEndpoints.includes(category) && models.includes(category)) {
            getModel(category).create(req.body.product, (err, product) => {
                if (err) {
                    // console.log(req.body);
                    console.error(error);
                } else {
                    console.log('successfully sent', product);
                    res.redirect('/');
                }
            });
        }
    });

    /* app.post('/fashion', (req, res) => {
        getModel('fashion').create(req.body.product, (err, product) => {
            if (err) {
                console.error(err);
            } else {
                console.log(product);
            }
        })
    }) */

    /* app.get('*', (req, res) => {
        res.redirect('/not-found');
    }); */
    /* app.get('/eyewear', (req, res) => {
        res.send('You reached the eyewear endpoint');
    });
    
    app.get('/fragrance', (req, res) => {
        res.send('You reached the fragrance endpoint');
    });

    app.get('/watches', (req, res) => {
        res.send('You reached the watches endpoint');
    });

    app.get('/skincare', (req, res) => {
        res.send('You reached the skincare endpoint');
    });

    app.get('/makeup', (req, res) => {
        res.send('You reached the makeup endpoint');
    });

    app.get('/jewelry', (req, res) => {
        res.send('You reached the jewelry endpoint');
    }); */

    
}