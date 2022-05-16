import axios from "axios";
import authHeader from './authHeader';

const DOCTOR_BASE_REST_API_URL="http://localhost:8080/doctor/";
class DoctorService {

    getAllDoctors() {
        console.log(authHeader());
        return axios.get(DOCTOR_BASE_REST_API_URL + "all", {headers: authHeader() })
            .then( response => {
                console.log(response.data);
            });
    }
    getCurrentUser() {
        return axios.get("http://localhost:8080/users/user", {headers: authHeader() })
            .then(response => {
                console.log(response.data);
            })
    }

    async getCurrentDoctor() {
        return axios.get("http://localhost:8080/doctor/myProfile", {headers: authHeader() })

    }
    getAllPatientsOfDoctor(id) {
        console.log(id)
        return axios.get("http://localhost:8080/doctor/" + id + "/patients", {headers: authHeader() })

    }
    updateDoctorInfo(updateInfo, id) {
        return axios.patch("http://localhost:8080/doctor/" + id + "/update", updateInfo, {headers: authHeader()})
    }

}

export default new DoctorService();