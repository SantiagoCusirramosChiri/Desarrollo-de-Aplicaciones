var mongoose = require('mongoose');


const mongoURI = 'mongodb://admin:secret@localhost:27017/node-crud?authSource=admin';

mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ Conectado a MongoDB con autenticación");
  })
  .catch((error) => {
    console.error("❌ Error conectando a MongoDB:", error.message);
  });

module.exports = mongoose;