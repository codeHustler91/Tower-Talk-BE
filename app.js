const express = require('express')
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listenting on port ${port}!`)
})

// routes
// instructors
app.get('/instructors', (request, response) => {
    queries.listAllInstructors().then(instructors => response.send(instructors))
})
app.delete('/instructors/:id', (request, response) => {
    console.log('got to delete route', request.params.id)
    queries.deleteInstructor(request.params.id).then(response.sendStatus(204))
})
// students
app.get('/students', (request, response) => {
    queries.listAllStudents().then(students => response.send(students))
})
app.delete('/students/:id', (request, response) => {
    console.log('got to delete route', request.params.id)
    queries.deleteStudent(request.params.id).then(response.sendStatus(204))
})
// materials
app.get('/materials', (request, response) => {
    queries.listAllMaterials().then(materials => response.send(materials))
})
app.delete('/materials/:id', (request, response) => {
    console.log('got to delete route', request.params.id)
    queries.deleteMaterial(request.params.id).then(response.sendStatus(204))
})
// instructor notes
app.get('/instructor_notes', (request, response) => {
    queries.listAllInstructorNotes().then(instructorNote => response.send(instructorNote))
})
app.delete('/instructor_notes/:id', (request, response) => {
    console.log('got to delete route', request.params.id)
    queries.deleteIntructorNote(request.params.id).then(response.sendStatus(204))
})
// student notes
app.get('/student_notes', (request, response) => {
    queries.listAllStudentNotes().then(studentNote => response.send(studentNote))
})
app.delete('/student_notes/:id', (request, response) => {
    console.log('got to delete route', request.params.id)
    queries.deleteStudentNote(request.params.id).then(response.sendStatus(204))
})