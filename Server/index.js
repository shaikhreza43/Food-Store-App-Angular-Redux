const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

//Data
const fruits = require('./fruits');


//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });


//General Route
app.get('/', (req, res) => {
    res.json({ message: "Food Store App NodeJs Backend" });
});

app.get('/fruits', (req, res) => {
    res.json(fruits);
  });

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
})
