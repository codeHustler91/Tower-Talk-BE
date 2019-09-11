const express = require('express')
let socket = require('socket.io')
const app = express()
const queries = require('./queries')
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser())

const port = process.env.PORT || 5000

let server = app.listen(port, () => {
    console.log(`listenting on port ${port}!`)
})

// socket setup
let room = 'abc123'
let io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    socket.on('room', function(room){
        socket.join(room)
    })
    socket.on('chat', function(data){
        io.sockets.in(room).emit('chat', data)
    })
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
})

// routes
// instructors
app.post('/instructors', (request, response) => {
    console.log('route', request.body)
    queries.createInstructor(request.body)
        .then(instructor => response.send(instructor))
})
app.get('/instructor/:email', (request, response) => {
    queries.showInstructor(request.params.email)
        .then(instructor => response.send(instructor))
})
app.get('/instructors', (request, response) => {
    queries.showAllInstructors()
        .then(instructors => response.send(instructors))
})
app.put('/instructor/:id', (request, response) => {
    queries.updateInstructor(request.params.id, request.body)
        .then(instructor => response.send(instructor))
})
app.delete('/instructor/:id', (request, response) => {
    queries.deleteInstructorNotes(request.params.id)
        .then(res => queries.deleteInstructor(request.params.id))
        .then(response.sendStatus(204))
})
// students
app.post('/students', (request, response) => {
    queries.createStudent(request.body)
        .then(student => response.send(student))
})
app.get('/student/:email', (request, response) => {
    queries.showStudent(request.params.email)
        .then(student => response.send(student))
})
app.get('/students', (request, response) => {
    queries.showAllStudents()
        .then(students => response.send(students))
})
app.put('/student/:id', (request, response) => {
    queries.updateStudent(request.body)
        .then(student => response.send(student))
})
app.delete('/student/:id', (request, response) => {
    queries.deleteStudentNotes(request.params.id)
        .then(res => queries.deleteStudent(request.params.id))
        .then(response.sendStatus(204))
})
// materials
app.get('/materials', (request, response) => {
    queries.showAllMaterials()
        .then(materials => response.send(materials))
})
app.delete('/material/:id', (request, response) => {
    queries.deleteAllStudentNotesForMaterial(request.params.id)
        .then(res => queries.deleteAllInstructorNotesForMaterial(request.params.id))
        .then(res => queries.deleteMaterial(request.params.id))
        .then(response.sendStatus(204))
})
// instructor notes
app.get('/instructor_notes', (request, response) => {
    queries.showAllInstructorNotes()
        .then(instructorNote => response.send(instructorNote))
})
app.get('/instructorNotesForMaterial/:id', (request, response) => {
    queries.showAllInstructorNotesForMaterial(request.params.id)
        .then(instructorNotes => response.send(instructorNotes))
})
app.delete('/instructorNote/:id', (request, response) => {
    queries.deleteInstructorNote(request.params.id)
        .then(response.sendStatus(204))
})
// student notes
app.get('/studentNotes', (request, response) => {
    queries.showAllStudentNotes()
        .then(studentNotes => response.send(studentNotes))
})
app.get('/studentNotesForMaterial/:id', (request, response) => {
    queries.showAllStudentNotesForMaterial(request.params.id)
        .then(studentNotes => response.send(studentNotes))
})
app.delete('/studentNotes/:id', (request, response) => {
    queries.deleteStudentNotes(request.params.id)
        .then(response.sendStatus(204))
})