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
    updateInstructor(id, instructor){
        console.log(instructor)
        return database('instructors')
            .where('id', id)
            .update(instructor)
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
    updateStudent(id, student){
        return database('students')
            .where('id', id)
            .update(student)
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
    updateInstructorNote(id, note){
        return database('instructor_notes')
            .where('id', id)
            .update(note)
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
    updateStudentNote(id, note){
        return database('student_notes')
            .where('id', id)
            .update(note)
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