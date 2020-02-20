const faker = require("faker"); 

const createFakerCar = () => ({
  year: faker.random.number({
    'min': 2016, 
    'max': 2020
  }), 
  make: faker.name.firstName(), 
  model: faker.name.firstName(),
  category: faker.name.firstName(), 
  convenienceid: faker.random.number({
    'min': 1, 
    'max': 3
  }), 
  entid: faker.random.number({
    'min': 1, 
    'max': 3
  }),
  offroadid: faker.random.number({
    'min': 1, 
    'max': 3
  }),
  seattrimid: faker.random.number({
    'min': 1, 
    'max': 3
  }),
  specsdimebid: faker.random.number({
    'min': 1, 
    'max': 3
  })
})


exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('vehicle').del()
  let vehicleArray = []; 
  let number = 10000000; 
  for(var i = 0; i < number; i++) {
    vehicleArray.push(createFakerCar())
    if(i % 10000 === 0) {
      await knex('vehicle').insert(vehicleArray); 
      vehicleArray = []; 
      if(i % 100000 === 0) {
        console.log(i); 
      }
    }
  }

  
};
    // .then(() => {
    //   let vehicleArray = []; 
    //   let number = 5000
    //   for(var i = 0; i < number; i++) {
    //     vehicleArray.push(createFakerCar())
    //   }
    //   return vehicleArray; 
    // })
    // .then(function (vehicleArray) {
    //   // Inserts seed entries
    //   return knex('vehicle').insert(vehicleArray);
    // })


