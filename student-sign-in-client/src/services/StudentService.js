import axios from "axios";


let base_url = '/api/Students'

export default {
    getAllStudents(){
        return axios.get(base_url).then(response => {
            return response.data
        })
    },
    addStudent(Student) {
        return axios.post(base_url, Student).then(response => {
            return response.data
        })
    },
    updateStudent(Student) {
        return axios.patch(`${base_url}/${Student.id}`, Student).then(response => {
            return response.data
        })
    },
    deleteStudent(id){
        return axios.delete(`${base_url}/${id}`).then(response =>{
            return response.data
        })
    }

}