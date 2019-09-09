const database = require('./database-connection')

module.exports = {
    // instructors
    createInstructor(instructor){
        return database('instructors')
            .insert(instructor)
            .returning('*')
    },
    showInstructor(email){
        return database('instructors')
            .where('email', email)
    },
    showAllInstructors(){
        return database('instructors')
    },
    updateInstructor(id, instructor){
        return database('instructors')
            .where('id', id)
            .update(instructor)
    },
    deleteInstructor(id){
        return database('instructors')
            .where('id', id)
            .delete()
    },
    // students table
    createStudent(student){
        return database('students')
            .insert(student)
            .returning('*')
    },
    showStudent(email){
        return database('students')
            .where('email', email)
    },
    showAllStudents(){
        return database('students')
    },
    updateStudent(id, student){
        return database('students')
            .where('id', id)
            .update(student)
    },
    deleteStudent(id){
        return database('students')
            .where('id', id)
            .delete()
    },
    // materials table
    createMaterial(material){
        return database('materials')
            .insert(material)
            .returning('*')
    },
    showAllMaterials(){
        return database('materials')
    },
    deleteMaterial(id){
        return database('materials')
            .where('id', id)
            .delete()
    },
    // instructor notes table
    createInstructorNote(note){
        return database('instructor_notes')
            .insert(note)
            .returning('*')
    },
    showAllInstructorNotes(){
        return database('instructor_notes')
    },
    showAllInstructorNotesForMaterial(id){
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
        return database('instructor_notes')
            .where('material_id', id)
            .delete()
    },
    // student notes table
    createStudentNote(note){
        return database('student_notes')
            .insert(note)
            .returning('*')
    },
    showAllStudentNotes(){
        return database('student_notes')
    },
    showAllStudentNotesForMaterial(id){
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
        return database('student_notes')
            .where('material_id', id)
            .delete()
    },
}