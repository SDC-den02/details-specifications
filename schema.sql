DROP DATABASE IF EXISTS echopark; 

CREATE DATABASE echopark; 

\c echopark; 

CREATE TABLE IF NOT EXISTS vehicle (
  carId SERIAL NOT NULL PRIMARY KEY, 
  year INT NOT NULL, 
  make VARCHAR(25) NOT NULL,
  model VARCHAR(25) NOT NULL,
  category VARCHAR(25) NOT NULL,
  convenienceID INTEGER NOT NULL, 
  EntID INTEGER NOT NULL,
  offRoadID INTEGER NOT NULL,
  seatTrimID INTEGER NOT NULL,
  specsDimebID INTEGER NOT NULL,
  FOREIGN KEY (convenienceID) 
    REFERENCES convenience(convenienceID), 
  FOREIGN KEY (EntID)
    REFERENCES entretainment(EntID), 
  FOREIGN KEY(offRoadID)
    REFERENCES offRoad(offRoadID), 
  FOREIGN KEY (seatTrimID)
    REFERENCES seatTrim(seatTrimID), 
  FOREIGN KEY (specsDimebID)
    REFERENCES specsDimeb(specsDimebID)
); 

CREATE TABLE IF NOT EXISTS convenience (
    convenienceID SERIAL PRIMARY KEY,
    one_tocuh_down_wnds VARCHAR(75) NOT NULL, 
    tilt_steering_wheel VARCHAR(75) NOT NULL, 
    telescoping_steering_wheel VARCHAR(75) NOT NULL, 
    garage_dr_transmiter VARCHAR(75) NOT NULL, 
    front_beverage_holder VARCHAR(75) NOT NULL, 
    spd_control VARCHAR(75) NOT NULL, 
    illuminated_entry VARCHAR(75) NOT NULL, 
    rear_bev_holder VARCHAR(75) NOT NULL, 
    pwr_wnds VARCHAR(75) NOT NULL, 
    trunk_auto_latch VARCHAR(75) NOT NULL, 
    emergency_comm_sys VARCHAR(75) NOT NULL, 
    remote_keyless_entry VARCHAR(75) NOT NULL
); 

CREATE TABLE IF NOT EXISTS entretainment (
    EntID SERIAL PRIMARY KEY,
    smrt_device_integration VARCHAR(75) NOT NULL,
    wireless_phone_connect VARCHAR(75) NOT NULL,
    am_fm VARCHAR(75) NOT NULL,
    primary_lcd_size VARCHAR(75) NOT NULL,
    first_row_lcd VARCHAR(75) NOT NULL,
    snd_row_lcd VARCHAR(75) NOT NULL
); 

CREATE TABLE IF NOT EXISTS offRoad (
    offRoadID SERIAL PRIMARY KEY,
    ground_clearance VARCHAR(75) NOT NULL,
    approach_angle VARCHAR(75) NOT NULL,
    departure_angle VARCHAR(75) NOT NULL,
    ramp_breakover_angle VARCHAR(75) NOT NULL
); 

CREATE TABLE IF NOT EXISTS seatTrim (
    seatTrimID SERIAL PRIMARY KEY,
    heated_seats VARCHAR(75) NOT NULL,
    pwr_seats VARCHAR(75) NOT NULL,
    frnt_seats VARCHAR(75) NOT NULL,
    rear_seats VARCHAR(75) NOT NULL,
    third_row_seats VARCHAR(75) NOT NULL,
    max_seating_capacity VARCHAR(75) NOT NULL
); 

CREATE TABLE IF NOT EXISTS specsDimeb (
    specsDimebID SERIAL PRIMARY KEY,
    front_legroom VARCHAR(75) NOT NULL,
    rear_legroom VARCHAR(75) NOT NULL,
    third_row_headroom VARCHAR(75) NOT NULL,
    compression_ratio VARCHAR(75) NOT NULL,
    eng_horse_pwr VARCHAR(75) NOT NULL,
    ext_h VARCHAR(75) NOT NULL,
    ext_l VARCHAR(75) NOT NULL
);

-- POST
--INSERT INTO vehicle (year, make, model, category) VALUES (2018, 'Jeep', 'Wrangler', 'SUV');

-- PUT 
--UPDATE vehicle SET year = 2019 WHERE carid = 1;

-- DELETE 
--DELETE FROM vehicle WHERE carid = 1; 

-- GET 
--SELECT * FROM vehicle WHERE carId = 2; 
INSERT INTO convenience (
    one_tocuh_down_wnds, 
    tilt_steering_wheel, 
    telescoping_steering_wheel, 
    garage_dr_transmiter, 
    front_beverage_holder, 
    spd_control, 
    illuminated_entry, 
    rear_bev_holder, 
    pwr_wnds, 
    trunk_auto_latch, 
    emergency_comm_sys, 
    remote_keyless_entry
) VALUES (
  '1-touch down',
  'Tilt steering wheel', 
  'Telescoping steering wheel', 
  '',
  'Front beverage holders', 
  'Speed control',
  'Illuminated entry',
  'Rear beverage holders', 
  'Power windows', 
  ' ', 
  ' ', 
  'Remote engine start: keyfob and smart device'
), (
  '1-touch down', 
  'Tilt steering wheel', 
  'Telescoping steering wheel', 
  'Garage door transmitter: HomeLink', 
  'Front beverage holders', 
  'Speed control',
  'Illuminated entry', 
  'Rear beverage holders', 
  'Power windows', 
  ' ',  
  ' ',  
  'Remote engine start: keyfob'
), (
  '1-touch down', 
  'Tilt steering wheel', 
  'Telescoping steering wheel', 
  ' ',  
  'Front beverage holders', 
  'Speed control',
  'Illuminated entry', 
  'Rear beverage holders', 
  'Power windows', 
  ' ',  
  'Emergency communication', 
  'Remote engine start: keyfob'
); 

INSERT INTO entretainment (
    smrt_device_integration,
    wireless_phone_connect,
    am_fm,
    primary_lcd_size,
    first_row_lcd,
    snd_row_lcd
) VALUES (
  ' ',
  'Wireless phone connectivity: Bluetooth', 
  'AM/FM radio: SiriusXM', 
  'Primary LCD size: 8.0', 
  '1st row LCD monitors: 2', 
  ' '
), (
  'Smart device integration',
  'Wireless phone connectivity: Bluetooth HandsFreeLink', 
  'AM/FM radio: SiriusXM', 
  'Primary LCD size: 8.0', 
  '1st row LCD monitors: 2', 
  ' '
), (
  ' ',
  'Wireless phone connectivity: Bluetooth', 
  'AM/FM radio', 
  ' ', 
  '1st row LCD monitors: 2', 
  '2nd row LCD monitors: 1'
); 

INSERT INTO offRoad (
    ground_clearance,
    approach_angle,
    departure_angle,
    ramp_breakover_angle
) VALUES (
  'Ground clearance (min): 226mm (8.9")', 
  'Approach angle: 18 deg', 
  'Departure angle: 23 deg', 
  'Ramp breakover angle: 19 deg'
), (
  'Ground clearance (min): 170mm (6.7")',
  ' ',
  ' ', 
  ' '
), (
  'Ground clearance (min): 120mm (5.2")',
  'Approach angle: 13 deg', 
  'Departure angle: 18 deg', 
  'Ramp breakover angle: 21 deg'
); 

INSERT INTO seatTrim (
  heated_seats,
  pwr_seats,
  frnt_seats,
  rear_seats,
  third_row_seats,
  max_seating_capacity
) VALUES (
  'Heated front seats', 
  'Power passenger seat', 
  'Front seats: bucket', 
  'Rear seats: split-benc', 
  ' ', 
  'Max seating capacity: 5'
), (
  'Heated front seats', 
  'Power passenger seat', 
  'Front seats: bucket', 
  'Rear seats: bench', 
  ' ', 
  'Max seating capacity: 5'
), (
  'Heated front seats', 
  'Power passenger seat', 
  'Front seats: bucket', 
  'Rear seats: bench', 
  'Third row seating', 
  'Max seating capacity: 7'
); 

INSERT INTO specsDimeb (
  front_legroom,
  rear_legroom,
  third_row_headroom,
  compression_ratio,
  eng_horse_pwr,
  ext_h,
  ext_l
) VALUES (
  'Front legroom: 1,150mm (45.3")', 
  '3rd row headroom: 983mm (38.7")', 
  'Rear legroom: 879mm (34.6")', 
  'Compression ratio: 11.00 to 1', 
  'Engine horsepower: 355hp @ 5,600RPM', 
  'Exterior height: 1,877mm (73.9")', 
  'Exterior length: 5,842mm (230.0")'
), (
  'Front legroom: 1,082mm (42.6")', 
  'Rear headroom: 932mm (36.7")', 
  ' ',
  'Compression ratio: 11.50 to 1', 
  'Engine horsepower: 290hp @ 6,200RPM', 
  'Exterior height: 1,448mm (57.0")', 
  'Exterior length: 4,834mm (190.3")'
), (
  'Front legroom: 1,016mm (40.0")', 
  'Rear shoulder room: 1,361mm (53.6")', 
  ' ', 
  'Compression ratio: 9.60 to 1', 
  'Engine horsepower: 200hp @ 5,100RPM', 
  'Exterior height: 1,590mm (62.6")', 
  'Exterior length: 4,389mm (172.8")'
); 

--SELECT * FROM vehicle INNER JOIN convenience ON vehicle.convenienceid = convenience.convenienceid; 













