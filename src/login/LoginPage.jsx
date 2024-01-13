import React, { useEffect, useState } from "react";
import './CSS/style.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../_reducers/UserSlice";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginIsDone = useSelector((state) => state.user.isDone);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(()=> {
        if (loginIsDone) {
            navigate('/calender');
        }
    }, [loginIsDone]);

    const loginHandler = () => {
        dispatch(loginUser({email, password}));
    }

    return (
        <>
        <div className="login-container">
           <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3 login-form">
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={loginHandler}>Submit</button>
                    <p className="mt-3">
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}

export {LoginPage};