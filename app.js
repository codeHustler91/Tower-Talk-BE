const express = require('express')
const app = express()
const queries = require('./queries')
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listenting on port ${port}!`)
})

// routes
// instructors
app.get('/instructors', (request, response) => {
    queries.listAllInstructors()
        .then(instructors => response.send(instructors))
})
app.put('/updateInstructor/:id', (request, response) => {
    queries.updateInstructor(request.params.id, request.body)
        .then(instructor => response.json(instructor))
})
app.delete('/instructors/:id', (request, response) => {
    queries.deleteInstructorNotes(request.params.id)
        .then(res => queries.deleteInstructor(request.params.id))
        .then(response.sendStatus(204))
})
// students
app.get('/students', (request, response) => {
    queries.listAllStudents()
        .then(students => response.send(students))
})
app.delete('/students/:id', (request, response) => {
    queries.deleteStudentNotes(request.params.id)
        .then(res => queries.deleteStudent(request.params.id))
        .then(response.sendStatus(204))
})
// materials
app.get('/materials', (request, response) => {
    queries.listAllMaterials()
        .then(materials => response.send(materials))
})
app.delete('/materials/:id', (request, response) => {
    queries.deleteAllStudentNotesForMaterial(request.params.id)
        .then(res => queries.deleteAllInstructorNotesForMaterial(request.params.id))
        .then(res => queries.deleteMaterial(request.params.id))
        .then(response.sendStatus(204))
})
// instructor notes
app.get('/instructor_notes', (request, response) => {
    queries.listAllInstructorNotes()
        .then(instructorNote => response.send(instructorNote))
})
app.get('/instructor_notes_for_material/:id', (request, response) => {
    queries.showAllInstructorNotesForMaterial(request.params.id)
        .then(instructorNote => response.send(instructorNote))
})
app.delete('/instructor_notes/:id', (request, response) => {
    queries.deleteInstructorNote(request.params.id)
        .then(response.sendStatus(204))
})
// student notes
app.get('/student_notes', (request, response) => {
    queries.listAllStudentNotes()
        .then(studentNote => response.send(studentNote))
})
app.get('/student_notes_for_material/:id', (request, response) => {
    queries.showAllStudentNotesForMaterial(request.params.id)
        .then(studentNote => response.send(studentNote))
})
app.delete('/student_notes/:id', (request, response) => {
    queries.deleteStudentNote(request.params.id)
        .then(response.sendStatus(204))
})