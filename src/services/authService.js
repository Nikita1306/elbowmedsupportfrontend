import axios from "axios";

const API_URL = "http://localhost:8080/doctor/";


class AuthService {
    login(username, password) {
        const data = {

        };

        const options = {
            headers: {
                'username': username,
                'password': password
            }
        };
        console.log(username, password);
        return axios
            .post(API_URL + "login", data, options
            )
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data.access_token));
                }
                console.log(response.data);
                console.log("localstorage" + localStorage.getItem("user"))
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();