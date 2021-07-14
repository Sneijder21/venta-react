import React from "react";
import { useState }   from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/ApiService";

const Login = ({props}) => {
	const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [remember_me, setRemember] = useState(false);

    const handlerLogin = async (e) => {
        e.preventDefault();
        let data = {
            email,
            password,
            remember_me
        }
        await api.post('/login', data).then( res =>{
            let data = res.data;
            console.log(data);
			history.push('/admin');
        }).catch(err => {
            console.log(err);
        });
    }

    return ( 
        <div>
            
			<div className="d-flex flex-column flex-root">
				
				<div className="d-flex flex-column flex-lg-row flex-column-fluid">
					
					<div className="d-flex flex-column flex-lg-row-auto w-xl-600px" style={{backgroundColor: '#F2C98A'}}>
						
						<div className="d-flex flex-column text-center p-10 pt-lg-20">
							
							<a href="index.html" className="py-9">
								<img alt="Logo" src="assets/media/logos/logo-3.svg" className="h-70px" />
							</a>
							
							
							<h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{color: '#986923'}}>Welcome to Metronic</h1>
							
							
							<p className="fw-bold fs-2" style={{color: '#986923'}}>Discover Amazing Metronic
							<br />with great build tools</p>
							
						</div>
						
						
						<div className="d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-size-lg-auto bgi-position-y-bottom min-h-100px min-h-lg-350px" style={{backgroundImage: 'url(assets/media/svg/illustrations/checkout.svg)'}}></div>
						
					</div>
					
					
					<div className="d-flex flex-column flex-lg-row-fluid py-10">
						
						<div className="d-flex flex-center flex-column flex-column-fluid">
							
							<div className="w-lg-500px p-10 p-lg-15 mx-auto">
								
								<form className="form w-100" id="kt_sign_in_form" onSubmit={ handlerLogin }>
									
									<div className="text-center mb-10">
										
										<h1 className="text-dark mb-3">Sign In to Metronic</h1>
										<div className="text-gray-400 fw-bold fs-4">New Here?
										<a href="authentication/flows/aside/sign-up.html" className="link-primary fw-bolder">Create an Account</a></div>
										
									</div>
									
									
									<div className="fv-row mb-10">
										<label className="form-label fs-6 fw-bolder text-dark">Email</label>
										<input className="form-control form-control-lg form-control-solid" type="text"
										name="email" onChange={(e) => {setEmail(e.target.value)}} />
									</div>
		
									<div className="fv-row mb-10">
										<div className="d-flex flex-stack mb-2">
											<label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
											<a href="authentication/flows/aside/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
										</div>
										<input className="form-control form-control-lg form-control-solid" type="password" name="password" 
										onChange={(e) => {setPassword(e.target.value)}} />
									</div>
									
									
									<div className="text-center">
										
										<button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
											<span className="indicator-label">Iniciar sesión</span>
											<span className="indicator-progress">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
										
										<a href="#" className="btn btn-light-primary btn-lg fw-bolder my-2">
										<img alt="Logo" src="assets/media/svg/social-icons/google.svg" className="h-20px me-3" />Sign in with Google</a>
										
									</div>
									
								</form>
								
							</div>
							
						</div>
						
						
						<div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
							
							<div className="d-flex flex-center fw-bold fs-6">
								<a href="https://keenthemes.com/faqs" className="text-muted text-hover-primary px-2" target="_blank">About</a>
								<a href="https://keenthemes.com/support" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
								<a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
			
        </div>
    );
};

export default Login;