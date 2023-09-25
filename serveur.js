const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

const dirname = __dirname;

app.use(express.static(path.join(dirname, 'view')));
app.use(express.static(path.join(dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/api/test/:number', (req, res) => {
  const number = req.params.number;
  const fact = square(number);
  res.json({ fact });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

function square(number){
  const tp = number*number;
  return `the square is ${tp}`;
}