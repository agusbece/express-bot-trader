const express = require('express');
const http = require('http');
var sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4080;
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('¡Hola!');
  console.log('Hola!');
});

app.get('/ok', (req, res) => {
    const texto = '¡Hola, mundo! 3';
    res.send(texto);
    console.log(texto);
  });
  
// app.listen(port, () => {
//   console.log(`Aplicación escuchando en http://localhost:${port}`);
// });

var models = require('./models');

// routes
var botRoute = require('./routes/bots');
// var settingRoute = require('./routes/setting');
// var transactionRoute = require('./routes/transactions');
var tokenRoute = require('./routes/token');

// Sync Database
models.sequelize
.sync()
.then(function () {
  console.log('connected to database');
})
.catch(function (err) {
  console.log(err);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// register routes
app.use('/bots', botRoute);
app.use('/tokens', tokenRoute);

// index path
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = http.createServer(app);

server.listen(port, function () {
  console.log('app listening on port: ' + port);
});

// Create database directory if it doesn't exist
const dbDir = path.join(__dirname, '../server/data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
  console.log('Created database directory:', dbDir);
}

module.exports = app;