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
    // students table
    listAllStudents(){
        return database('students')
    },
    deleteStudent(id){
        return database('students')
            .where('id', id)
            .delete()
    },
    // materials table
    listAllMaterials(){
        return database('materials')
    },
    deleteMaterial(id){
        console.log('delete material', id)
        return database('materials')
            .where('id', id)
            .delete()
    },

    // instructor notes table
    listAllInstructorNotes(){
        return database('instructor_notes')
    },
    showAllInstructorNotesForMaterial(id){
        console.log('show instructor notes for material', id)
        return database('instructor_notes')
            .where('material_id', id)
    },
    deleteInstructorNotes(id){
        return database('instructor_notes')
            .where('instructor_id', id)
            .delete()
    },
    deleteAllInstructorNotesForMaterial(id){
        console.log('delete instructor notes for material', id)
        return database('instructor_notes')
            .where('material_id', id)
            .delete()
    },
    // student notes table
    listAllStudentNotes(){
        return database('student_notes')
    },
    showAllStudentNotesForMaterial(id){
        console.log('show student notes for material', id)
        return database('student_notes')
           .where('material_id', id)
    },
    deleteStudentNotes(id){
        return database('student_notes')
            .where('student_id', id)
            .delete()
    },
    deleteAllStudentNotesForMaterial(id){
        console.log('delete student note for material', id)
        return database('student_notes')
            .where('material_id', id)
            .delete()
    },
}