const router = require('express').Router();
let Task = require('../models/task');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const taskTime = req.body.taskTime;
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;

    const newTask = new Task({
        taskTime,
        taskTitle,
        taskDescription,
    });

    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;