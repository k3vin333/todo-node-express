const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/task')

// Need a get request to get all current tasks (app.get('/api/v1/tasks'))
// Need a post request to make new tasks    (app.post('/api/v1/tasks'))

router.route('/').get(getAllTasks).post(createTask)

// Need a get request to get info for a single task (app.get('/api/v1/tasks/:id')
// Need a edit to change a task from completed from false to true (app.patch('/api/v1/tasks/:id'))
// Need a delete request to delete a task   (app.delete('/api/v1/tasks/:id')))
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;