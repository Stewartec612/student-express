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
    }

}