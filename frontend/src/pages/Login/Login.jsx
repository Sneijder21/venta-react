import React  from "react";
import api from "../../services/ApiService";

const login = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        let data = {
            'email': "",
            'password' : "",
            'remember_me': true
        }
        await api.post('/login', data).then(( res ) =>{
            let data = res.data;
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

    return ( 
        <div>
            <h3>login</h3>
        </div>
    );
};

export default login;