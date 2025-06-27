const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flightApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
