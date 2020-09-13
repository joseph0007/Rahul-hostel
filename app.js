const mongoose = require('mongoose');
const express = require('express');
const app = express();

const detailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const cust_details = mongoose.model('cust_details', detailSchema);

app.use(express.json());

//serves static files
app.use(express.static(`${__dirname}/public`));

app.get('/contacts', (req, res) => {
  cust_details
    .create(req.query)
    .then(() => {
      // res.send(`<i> thank you we will update you with hostel details <i>
      // <a href="/">go back<a>`);
      res.status(204).send();
    })
    .catch((err) => {
      res.send(`<i> Something went wrong try again <i>
      <a href="/">try again<a><br> Name/Number already exists!!`);
    });
});

module.exports = app;
