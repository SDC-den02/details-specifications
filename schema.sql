DROP DATABASE IF EXISTS echopark; 

CREATE DATABASE echopark; 

\c echopark; 

CREATE TABLE IF NOT EXISTS vehicle (
  carId SERIAL PRIMARY KEY, 
  year INT NOT NULL, 
  make VARCHAR(25) NOT NULL,
  model VARCHAR(25) NOT NULL,
  category VARCHAR(25) NOT NULL
)

CREATE TABLE IF NOT EXISTS convenienceFeat (
    convFeatId SERIAL PRIMARY KEY,
    one_tocuh_down_wnds TEXT NOT NULL, 
    tilt_steering_wheel TEXT NOT NULL, 
    telescoping_steering_wheel TEXT NOT NULL, 
    garage_dr_transmiter TEXT NOT NULL, 
    front_beverage_holder TEXT NOT NULL, 
    spd_control TEXT NOT NULL, 
    illuminated_entry TEXT NOT NULL, 
    rear_bev_holder TEXT NOT NULL, 
    pwr_wnds TEXT NOT NULL, 
    trunk_auto_latch TEXT NOT NULL, 
    emergency_comm_sys TEXT NOT NULL, 
    remote_keyless_entry TEXT NOT NULL, 
    FOREIGN KEY (carId) 
        REFERENCES vehicle(carId)
)

CREATE TABLE IF NOT EXISTS entmtFeat (
  
)






