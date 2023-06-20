import axios from "axios";
const API_URL = 'http://localhost:8081/api/user/';

class UserService {

    login(user){

        const header = {
            authorization: 'Basic ' + btoa(user.username + ':' + user.password) // username ve password bu şekilde mi olacak?
        };

        return axios.get(API_URL + 'login', {headers: header});

    }

    logout(){
        return axios.post(API_URL + 'logout', {});
    }

    register(user) {
        return axios.post(API_URL + 'save', user);
    }

    changeRole(username, newRole) {
        return axios.put(API_URL + 'changeRole/' + newRole + '/' + username, {});
    }

}

export default new UserService();