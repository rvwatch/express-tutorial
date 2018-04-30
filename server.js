const express = require('express');
const app = express();
const jsonData = require('./jsonData');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.listen(2000, () => {
  console.log('Express is listening on localhost 2000');
});

app.get('/', (request, response) => {
});


app.get('/sunsets', function(request, response) {
  console.log('sunsets');
  
  response.sendFile('public/sunsets.html', {root: __dirname })
});

app.get('/json', (request, response) => {
  response.status(200).json(jsonData);
});

app.use(function (req, res, next) {
  res.status(404).send("Well... You can't just type whatever you want.")
})


