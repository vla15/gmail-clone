const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../node_modules')));





app.listen(3000, () => {
  console.log('Current listening in on port 3000');
})

app.get('/', (req, res) => {
})
