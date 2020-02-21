USE details_specs; 

db.createCollection("vehicle"); 

db.createCollection("convenience"); 

db.createCollection("entretainment");

db.createCollection("offRoad"); 

db.createCollection("seatTrim"); 

db.createCollection("specsDimeb"); 

db.vehicle.insert({"year": 2019, "make": "Jeep", "model": "Wrangler", "category": "SUV", "convenienceID": db.convenience.find()[1], "EntID": db.entretainment.find()[1], "offRoadID": db.offRoad.find()[1], "seatTrimID": db.seatTrim.find()[1], "specsDimebID": db.specsDimeb.find()[1]})

db.convenience.insert({"id": 3, "one_tocuh_down_wnds": "1-touch down", "tilt_steering_wheel": "Tilt steering wheel", "telescoping_steering_wheel": "Telescoping steering wheel", "garage_dr_transmiter": "", "front_beverage_holder": "Front beverage holders", "spd_control": "Speed control", "illuminated_entry": "Illuminated entry", "rear_bev_holder": "Rear beverage holders", "pwr_wnds": "Power windows", "trunk_auto_latch": "", "emergency_comm_sys": "Emergency communication", "remote_keyless_entry": "Remote engine start: keyfob"})

db.entretainment.insert({"id": 1, "smrt_device_integration": "", "wireless_phone_connect": "Wireless phone connectivity: Bluetooth", "am_fm": "AM/FM radio: SiriusXM", "primary_lcd_size": "Primary LCD size: 8.0", "first_row_lcd": "1st row LCD monitors: 2", "snd_row_lcd": ""})
db.entretainment.insert({"id": 2, "smrt_device_integration": "Smart device integration", "wireless_phone_connect": "Wireless phone connectivity: Bluetooth HandsFreeLink", "am_fm": "AM/FM radio: SiriusXM", "primary_lcd_size": "Primary LCD size: 8.0", "first_row_lcd": "1st row LCD monitors: 2", "snd_row_lcd": ""})
db.entretainment.insert({"id": 3, "smrt_device_integration": "", "wireless_phone_connect": "Wireless phone connectivity: Bluetooth", "am_fm": "AM/FM radio", "primary_lcd_size": "", "first_row_lcd": "1st row LCD monitors: 2", "snd_row_lcd": "2nd row LCD monitors: 1"})

db.entretainment.deleteOne({"_id" : ObjectId("5e4d813ecbb257623be5317b"),})

db.offRoad.insert({
  "id": 1, 
  "ground_clearance": 'Ground clearance (min): 226mm (8.9")',
  "approach_angle": "Approach angle: 18 deg",
  "departure_angle": "Departure angle: 23 deg",
  "ramp_breakover_angle": "Ramp breakover angle: 19 deg"
})

db.offRoad.insert({
  "id": 2,
  "ground_clearance": 'Ground clearance (min): 170mm (6.7")',
  "approach_angle": "",
  "departure_angle": "",
  "ramp_breakover_angle": ""
})

db.offRoad.insert({
  "id": 3,
  "ground_clearance": 'Ground clearance (min): 120mm (5.2")',
  "approach_angle": "Approach angle: 13 deg",
  "departure_angle": "Departure angle: 18 deg",
  "ramp_breakover_angle": "Ramp breakover angle: 21 deg"
})

db.seatTrim.insert({
  "id": 1,
  "heated_seats": "Heated front seats",
  "pwr_seats": "Power passenger seat",
  "frnt_seats": "Front seats: bucket",
  "rear_seats": "Rear seats: split-bench",
  "third_row_seats": "",
  "max_seating_capacity": "Max seating capacity: 5"
})

db.seatTrim.insert({
  "id": 2,
  "heated_seats": "Heated front seats",
  "pwr_seats": "Power passenger seat",
  "frnt_seats": "Front seats: bucket",
  "rear_seats": "Rear seats: bench",
  "third_row_seats": "",
  "max_seating_capacity": "Max seating capacity: 5"
})

db.seatTrim.insert({
  "id": 3,
  "heated_seats": "Heated front seats",
  "pwr_seats": "Power passenger seat",
  "frnt_seats": "Front seats: bucket",
  "rear_seats": "Rear seats: bench",
  "third_row_seats": "Third row seating",
  "max_seating_capacity": "Max seating capacity: 7"
})

db.specsDimeb.insert({
  "id": 1,
  "front_legroom": 'Front legroom: 1,150mm (45.3")', 
  "rear_legroom": '3rd row headroom: 983mm (38.7")',
  "third_row_headroom": 'Rear legroom: 879mm (34.6")',
  "compression_ratio": "Compression ratio: 11.00 to 1",
  "eng_horse_pwr": "Engine horsepower: 355hp @ 5,600RPM",
  "ext_h": 'Exterior height: 1,877mm (73.9")',
  "ext_l": 'Exterior length: 5,842mm (230.0")'
})

db.specsDimeb.insert({
  "id": 2,
  "front_legroom": 'Front legroom: 1,082mm (42.6")', 
  "rear_legroom": 'Rear headroom: 932mm (36.7")',
  "third_row_headroom": "",
  "compression_ratio": "Compression ratio: 11.50 to 1",
  "eng_horse_pwr": "Engine horsepower: 290hp @ 6,200RPM",
  "ext_h": 'Exterior height: 1,448mm (57.0")',
  "ext_l": 'Exterior length: 4,834mm (190.3")'
})

db.specsDimeb.insert({
  "id": 3,
  "front_legroom": 'Front legroom: 1,016mm (40.0")', 
  "rear_legroom": 'Rear shoulder room: 1,361mm (53.6")',
  "third_row_headroom": "",
  "compression_ratio": "Compression ratio: 9.60 to 1",
  "eng_horse_pwr": "Engine horsepower: 200hp @ 5,100RPM",
  "ext_h": 'Exterior height: 1,590mm (62.6")',
  "ext_l": 'Exterior length: 4,389mm (172.8")'
})

// db.vehicles.find().limit(3)

db.vehicles.aggregate([
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
}).pretty()

