const mongoose = require('mongoose');

// use schema to setup all documents that eventually will have in collection
const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)