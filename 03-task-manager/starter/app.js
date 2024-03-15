// setup express server
const express = require('express');
const app = express();

// import routes from tasks.js
const tasks = require('./routes/tasks')

//connect to mongodb
const connectDB = require('./db/connect')
require('dotenv').config()

// sending json from app when making new tasks, to access data in routes, need middleware built into express
// middleware

app.use(express.json())

// Need a get request to get all current tasks (app.get('/api/v1/tasks'))
// Need a post request to make new tasks    (app.post('/api/v1/tasks'))
// Need a get request to get info for a single task (app.get('/api/v1/tasks/:id')
// Need a edit to change a task from completed from false to true (app.patch('/api/v1/tasks/:id'))
// Need a delete request to delete a task   (app.delete('/api/v1/tasks/:id')))

// routes, req = request. res = response
app.get('/hello', (req, res)=> {
    res.send('Task Manager App');
})


app.use('/api/v1/tasks', tasks)


const port = 3000

//We want to wait for the DB to connect successfully before we start up the express.
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // Server will only start with connection to database is successful
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

// removed message of successful connection to DB however if we change password in /db/connect.js it will give error
start()