require('dotenv').config();
const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3080;


app.use(express.static(__dirname + '/../client/dist'))
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/details_specs', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

mongoose.Promise = Promise; 
db.on('error', console.error.bind(console, 'Connection error:')); 
db.once('open', () => {
  console.log('Connected to db...');
});


app.get ( '/api/vehicles', function (req, res) {
  // query to retrieve all documents in the vehicle collection
  Vehicle.find( {_id: '5e3b48baa24e4bf2e8ed6971'}, function (err, docs){
      res.json(docs);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

