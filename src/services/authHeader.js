export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(" authHeader user" +user)
    console.log(" authHeader user access token" +user.access_token)
    if (user) {
        console.log(user.accessToken)
        return { Authorization: 'Bearer ' + user }; // for Spring Boot back-end
       // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return {};
    }
}