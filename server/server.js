const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));



/* app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); */

routes(app);

app.listen(port, () => console.log('listening on port: ' + port));
