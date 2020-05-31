import React from "react";


const Login = (prop: any) => {

    const loginHandler = () => {

    }

    return (
        <div className="card">
            <div>
                <div>
                    Login
                </div>
                <form>
                    <div>
                        <input type="email" name="Email" />
                        <input name="Password" />
                        <input type="checkbox" name="Password" />
                    </div>
                    <button onClick={() => loginHandler()}> Login </button>
                    <span> Don't have an account? Sign up here </span>
                </form>
            </div>
            This is login component
        </div>
    )
}


export default Login;
