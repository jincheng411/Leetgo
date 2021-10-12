const mongoose = require('mongoose');

module.export = mongoose.connect('mongodb://localhost:27017/letscode', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongo connection open')
  })
  .catch(error => {
    console.log('mongo error!!')
    console.log(error)
  })