const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const myDetail = {
        name: 'michael',
        address: 'samakhushi'
    }
  res.json(myDetail);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});