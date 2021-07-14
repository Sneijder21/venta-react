import axios from "axios";
import AuthService from "./AuthService";

const auth = new AuthService();

const ApiService = axios.create({
    baseURL : 'http://localhost:8000/api/auth',
    headers : {
        'Authorization': 'Bearer ' + auth.token(),
        'Access-Control-Allow-Origin': '*',    
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'credentials': 'same-origin'
    }
});

export default ApiService;