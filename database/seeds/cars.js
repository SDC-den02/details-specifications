const faker = require('faker'); 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/details_specs', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

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

let vehicleSchema = new mongoose.Schema({ 
  year: Number, 
  make: String,
  model: String,
  category: String,
  convenienceid: Number, 
  entid: Number,
  offroadid: Number,
  seattrimid: Number,
  specsdimebid: Number
})

const Car =  mongoose.model('vehicle', vehicleSchema)


// const seedMongo = async () => {
//   // Deletes ALL existing entries
//   // await Car.deleteMany({})
//   let vehicleArray = [];

//   // for (let i = 1; i <= 1000; i++) {
//   //   for (let j = 0; j < 1000; j++) {
//   //     vehicleArray.push(createFakerCar());
//   //   }
//   //   Car.insertMany(vehicleArray, {lean: true}, (error, docs) => {
//   //     if (error) console.log(error); 
//   //     console.log('batch' + i)
//   //   });
//   //   vehicleArray = [];
//   // }

//   // console.log("Done seeding!!!")
//   // let total = 100000
//   // for (var i = 0; i <= total; i++) {
//   //   vehicleArray.push(createFakerCar())
//   //   if(i % 1000 === 0) {
//   //     await Car.insertMany(vehicleArray, (error) => {
//   //       if (error) console.log(error);
//   //       console.log('batch done') 
//   //     }); 
//   //     vehicleArray.length = 0; 
//   //     if(i % 100000 === 0) {
//   //       await console.log(i); 
//   //     }
//   //   }
//   // }

// };

// seedMongo(); 

const generateChunk = (size) => {
  return new Promise((resolve, reject) => {
    let chunk = [];
    for (let i = 0; i < size; i++) {
      chunk.push(createFakerCar());
    }
    resolve(chunk);
  })
}
const insertChunk = (chunk) => {
  return Car.insertMany(chunk, { lean: true }).then(() => console.log(`batch size ${chunk.length} complete`));
}
const singleChunk = (chunkSize) => {
  return generateChunk(chunkSize)
    .then(chunk => insertChunk(chunk))
}
const seedMongoAsync = (numChunks, chunkSize) => {
  const chunks = [...Array(numChunks).keys()];
  console.log('building promise chain');
  chunks.reduce((previousPromise, current, i, arr) => {
    if (i === arr.length - 1) {
      console.log('adding catch & finally');
      return previousPromise.then(() => singleChunk(chunkSize)).catch(console.error).finally(() => {console.log('seeding complete!'); process.exit()});
    } else {
      return previousPromise.then(() => singleChunk(chunkSize));
    }
  }, Promise.resolve());
  console.log('promise chain built');
  console.log('seeding...');
}
seedMongoAsync(100, 100000);