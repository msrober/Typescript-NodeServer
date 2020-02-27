import express from "express";

require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const APIRoutes = require("./api/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req: any, res) => {
  res.send('Hello from your server :)');
});

app.use('/api/', APIRoutes);

if(!module.parent) {
  app.listen(3010, () => {
    console.log('Server initated');
  });
}


module.exports = app;