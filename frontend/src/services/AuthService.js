
export default class AuthService {

    handleAuthentication = (resultLogin) => {
        localStorage.setItem('id', resultLogin.id);
        localStorage.setItem('email', resultLogin.email);
        localStorage.setItem('name', resultLogin.name);        
        localStorage.setItem('access_token', resultLogin.access_token);
        localStorage.setItem('token_type', resultLogin.token_type);
        localStorage.setItem('expires_at', resultLogin.expires_at);
        localStorage.setItem('permiso_qr', resultLogin.permiso_qr);
    }

    handleAuthSesion = (resultLogin) => {        
        sessionStorage.setItem('id', resultLogin.id);
        sessionStorage.setItem('email', resultLogin.email);
        sessionStorage.setItem('name', resultLogin.name);        
        sessionStorage.setItem('access_token', resultLogin.access_token);
        sessionStorage.setItem('token_type', resultLogin.token_type);
        sessionStorage.setItem('expires_at', resultLogin.expires_at);
    }
    token = () => {
        return localStorage.getItem("access_token");          
    }
};