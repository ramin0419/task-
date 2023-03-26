const express = require('express');
const quotesData = require('./quotes.json');

const PORT = 4000;
//create a server
const app = express();

const getRandomIndex = () => {
  return Math.floor(Math.random() * quotesData.quotes.length);
};

app.get('/', (req, res) => {
  res.send('quotes app');
});

app.get('/quotes', (req, res) => {
  res.json(quotesData.quotes[getRandomIndex()]);
});
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

console.log('hello');
//sorrrryrrrryryrrryry
