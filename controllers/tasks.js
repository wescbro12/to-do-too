const express = require('express');
const router = express.Router();
const Task = require('../models/task')

//Home
router.get('/', (req, res) => {
    // res.send('Help me')
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            res.status(200).json(foundTasks)
        } else {
            res.status(400).json(err)
        }
    })
})

//Select Task
router.get('/select', (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            const formattedData = foundTasks.reduce(
                (acc, item) => {
                    acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                    return acc
                }, {}
            )
            res.status(200).json(formattedData)
        } else {
            res.status(400).json.err
        }
    })
})

//Create New Task
router.post('/', (req, res) => {
    const { body } = req
    Task.create(body, (err, createdTask) => {
        if (!err) {
            res.status(200).json({ message: "Texas sized 10-4", createdTask })
        } else {
            res.status(400).json(err)
        }
    })
})

// Update Task
router.put('/:id', (req, res) => {
    const { body } = req
    Task.i = findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedTask) => {
        if (!err) {
            res.status(200).json(updatedTask)
        } else {
            res.status(400).json(err)
        }
    })
})

//Delete Task
router.post('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Job Done" })
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router;