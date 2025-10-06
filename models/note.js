const mongoose = require('mongoose');

// const password = process.argv[2];



const url = process.env.MONGODB_URI;

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });


const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
});

noteSchema.set('toJSON', {
  tranform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  }
});

module.exports = mongoose.model('Note', noteSchema);
// mongoose.set('strictQuery', false); 

// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// });
