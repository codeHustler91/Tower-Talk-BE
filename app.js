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
// students
app.get('/students', (request, response) => {
    queries.listAllStudents().then(students => response.send(students))
})
// materials
app.get('/materials', (request, response) => {
    queries.listAllMaterials().then(materials => response.send(materials))
})
// instructor notes
app.get('/instructor_notes', (request, response) => {
    queries.listAllInstructorNotes().then(instructorNote => response.send(instructorNote))
})
// student notes
app.get('/student_notes', (request, response) => {
    queries.listAllStudentNotes().then(studentNote => response.send(studentNote))
})