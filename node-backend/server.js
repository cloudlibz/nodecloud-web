var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

app.set('port', (process.env.PORT || 4000));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json()
app.use(cors());

const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

app.get('/', function(req, res){
    return res.redirect('/login')
});

app.listen(app.get('port'), () => {
    console.log("Listening to port: ", app.get("port"))
});

