require('dotenv').config();
const mongoose = require('mongoose');
const express = require ('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3080;
const Vehicle = require('./database/mongo/vehicle.js'); 

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


app.get ( '/api/vehicles', (req, res) => {
  Vehicle.aggregate([
    { $limit : 1 },
    {
        $lookup:{
            from: "convenience",
            localField : "convenienceid",
            foreignField : "id",
            as : "convenience"
        }
    },
    {  
        $lookup:{
          from: "entretainment",
          localField : "entid",
          foreignField : "id",
          as : "entretainment"
        }
  
    },
    {
        $lookup:{
          from: "offRoad",
          localField : "offroadid",
          foreignField : "id",
          as : "offRoad"
        }
    },
    {
        $lookup:{
          from: "seatTrim",
          localField : "seattrimid",
          foreignField : "id",
          as : "seattrim"
        }
    },
    {
      $lookup:{
        from: "specsDimeb",
        localField : "specsdimebid",
        foreignField : "id",
        as : "specsdimeb"
      }
    }
  ], function (err, docs){
    res.json(docs);
  })
}); 

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

