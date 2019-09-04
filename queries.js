const database = require('./database-connection')

module.exports = {
    // instructors
    listAllInstructors(){
        return database('instructors')
    },
    deleteInstructor(id){
        return database('instructors')
          .where('id', id)
          .delete()
    },
    // students
    listAllStudents(){
        return database('students')
    },
    deleteStudent(id){
        return database('students')
          .where('id', id)
          .delete()
    },
    // materials
    listAllMaterials(){
        return database('materials')
    },
    deleteMaterial(id){
        return database('materials')
          .where('id', id)
          .delete()
    },
    // instructor notes
    listAllInstructorNotes(){
        return database('instructor_notes')
    },
    deleteInstructorNote(id){
        return database('instructor_notes')
          .where('id', id)
          .delete()
    },
    // student notes
    listAllStudentNotes(){
        return database('student_notes')
    },
    deleteStudentNote(id){
        return database('student_notes')
          .where('id', id)
          .delete()
    },
}