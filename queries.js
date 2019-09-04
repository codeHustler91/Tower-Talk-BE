const database = require('./database-connection')

module.exports = {
    // instructors
    listAllInstructors(){
        return database('instructors')
    },
    // students
    listAllStudents(){
        return database('students')
    },
    // materials
    listAllMaterials(){
        return database('materials')
    },
    // instructor notes
    listAllInstructorNotes(){
        return database('instructor_notes')
    },
    // student notes
    listAllStudentNotes(){
        return database('student_notes')
    },
}