import React from "react";
import './style.css';

const Login = ({ history }: any) => {

    const loginHandler = () => {
        history.push('/workflow');
    }

    return (
        <div className="flex-center vh">
            <div className="card login">
                <div className="flex-column p-16">
                    <div className="m-16 p-8 flex-center">
                        Login
                    </div>
                    <input placeholder="Email" className="input-login m-8 p-4" type="email" name="Email" autoComplete="off"/>
                    <input placeholder="Password" className="input-login p-4 m-8" name="Password" autoComplete="off"/>
                    <div className="flex-row  m-8">
                        <input className="m-r-8" type="checkbox" name="Password" />
                        <div> Remember Me</div>
                    </div>
                    <button className=" save-btn login-btn btn m-8" onClick={() => loginHandler()}> Login </button>
                    <div className="flex-center m-t-16 sign-up">
                        <a href="" target="_blank">
                            Don't have an account? Sign up here
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Login;
