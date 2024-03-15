const mongoose = require('mongoose')

//john smilgers tutorial is quite outdate, new version to fix errors is to:
//npm install mongoose@latest
//mongoose.connect(connectionString), automatically gets rid of errors
const connectDB = (url) =>{
return mongoose.connect(url)
}

// code above returns a promise, which means, an action will either be completed or rejected, if completed, promise is kept and other its broken.

module.exports = connectDB
