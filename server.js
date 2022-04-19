require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const taskRouter = require('./controllers/tasks.js')
Task = require('./models/task')


//Set Port
const PORT = process.env.PORT || 3001;

require('./models/connection')

const app = express();

app.use(logger('dev'));
app.use(express.json());

//MIDDLEWARE\\
app.use(express.static(path.join(__dirname, 'build')))
// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// })

// app.use("/task", taskRouter)

//Home
app.get('/', (req, res) => {
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
app.get('/select', (req, res) => {
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
app.post('/', (req, res) => {
    const { body } = reqTask.create(body, (err, createdTask) => {
        if (!err) {
            res.status(200).json({ message: "Texaes sized 10-4", createdTask })
        } else {
            res.status(400).json(err)
        }
    })
})

// Update Task
app.put('/:id', (req, res) => {
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
app.post('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Job Done" })
        } else {
            res.status(400).json(err)
        }
    })
})



//CATCH ALL\\
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', index.html))
})

app.listen(PORT, () => {
    console.log(`Looking at the Backend of ${PORT}`)
})