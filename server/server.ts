const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const contacts = [
    {
      id: 1,
      name: 'Peter',
      age: 23,
      adress: 'Calle A 123 piso 4º3',
      phone: 934934959,
      url: 'user.png'
    },
    {
      id: 2,
      name: 'Charles',
      age: 43,
      adress: 'Av Diagonal 320 piso 2º2',
      phone: 935598638,
      url: 'user.png'
    },
    {
      id: 3,
      name: 'John',
      age: 34,
      adress: 'Gran Via CC 198 piso 3º1',
      phone: 938876498,
      url: 'user.png'
    }
  ];
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.route('/api/contacts')
    .get((req, res) => {
        res.status(200).json(contacts);
    }).post((req, res) => {
        res.status(200).json(contacts.find(c => c.id == req.body.id));
    });
app.listen(3000, () => {
 console.log('Server running on port 3000');
});
