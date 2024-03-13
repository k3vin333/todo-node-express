const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://kevin:greenredbrick123@cluster0.op63cpi.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0'

//john smilgers tutorial is quite outdate, new version to fix errors is to:
//npm install mongoose@latest
//mongoose.connect(connectionString), automatically gets rid of errors
const connectDB = (url) =>{
return mongoose.connect(connectionString)
}

// code above returns a promise, which means, an action will either be completed or rejected, if completed, promise is kept and other its broken.

module.exports = connectDB
