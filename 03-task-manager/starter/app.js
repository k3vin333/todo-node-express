// setup express server
const express = require('express');
const app = express();

// import routes from tasks.js
const tasks = require('./routes/tasks')

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

app.listen(port, console.log(`server is listening on port ${port}`))