require('dotenv').config();
const express = require ('express');
const app = express();
const cors = require('cors');
// var pgp = require('pg-promise'); 
// var db = pgp('postgres://liz.anayaramos:''@host:5020/echopark');  //???
const { Pool } = require('pg'); 

const PORT = process.env.PORT || 3008;

const pool = new Pool({
  host: 'localhost',
  user: 'liz.anayaramos',
  database: 'echopark', 
  port: 5432
}); 

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

app.get('/api/vehicles', (req, res) => {
  
  let queryString = `SELECT * FROM vehicle 
    INNER JOIN convenience ON vehicle.convenienceid = convenience.convenienceid
    INNER JOIN entretainment ON vehicle.entid = entretainment.entid
    INNER JOIN offroad ON vehicle.offroadid = offroad.offroadid
    INNER JOIN seattrim ON vehicle.seattrimid = seattrim.seattrimid
    INNER JOIN specsdimeb ON vehicle.specsdimebid = specsdimeb.specsdimebid
    WHERE carid = 1345023;`

  pool.query(queryString, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results.rows}); 
    }
  })
}); 

app.post('/api/vehicles', (req, res) => {
  pool.query(`INSERT INTO vehicle (year, make, model, category, convenienceID, 
    EntID, offRoadID, seatTrimID, specsDimebID) VALUES (2018, 'Jeep', 'Wrangler', 'SUV', 1, 2, 3, 2, 1)`, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results}); 
    }
  })
}); 

//  POST
// INSERT INTO vehicle (year, make, model, category) VALUES (2018, 'Jeep', 'Wrangler', 'SUV');

app.put('/api/vehicles', (req, res) => {
  pool.query('UPDATE vehicle SET year = 2019 WHERE carid = 1', (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results}); 
    }
  })
}); 

//  PUT 
// UPDATE vehicle SET year = 2019 WHERE carid = 1;

app.put('/api/vehicles', (req, res) => {
  pool.query('DELETE FROM vehicle WHERE carid = 1', (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results}); 
    }
  })
});

//  DELETE 
// DELETE FROM vehicle WHERE carid = 1; 

app.use(express.json()); 
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.listen(PORT, () => {
  console.log(`Listening from: ${PORT}`); 
}); 