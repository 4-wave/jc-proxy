require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/homes/:id', (req, res) => {
  res.redirect(`http://13.57.249.32:3002/api/homes/${req.params.id}`)
})

app.get('/api/reservations/:id', (req, res) => {
  res.redirect(`http://13.57.249.32:3002/api/reservations/${req.params.id}`)
})

app.post('/api/reservations/:id', (req, res) => {
  res.redirect(`http://13.57.249.32:3002/api/reservations/${req.params.id}`)
})

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
