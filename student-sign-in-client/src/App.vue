<template>
  <div id="app">
    
    <NewStudentForm v-on:student-added="newStudentAdded"></NewStudentForm>
    <StudentTable
      v-bind:students="students" 
      v-on:student-present="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted">
    </StudentTable>
    <StudentMessage v-bind:student="mostRecentStudent"></StudentMessage>

  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

export default {
  name: 'app',
  data() {
    return {
      students: [],
      mostRecentStudent: {}
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  mounted() {
    this.updateStudents()
  },
  methods: {

    newStudentAdded(Student) {
    },
    studentArrivedOrLeft(Student, present) {
      // find student in this.students, set present value
    },
    studentDeleted(student) {
    },
    updateStudents() {
      this.$student_api.getAllStudents().then(students => {
        this.students = students
      })
    }
  }
}
</script>

<style>

@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";

</style>
