import React from 'react'
import './Signin.css';

 function Signin() {
    return (
        <section className="login">
        <div className="loginContainer">
        <h2 style={{textAlign:'start'}}>Join us today !</h2>
        <h5 style={{textAlign:'start'}}>Create your account now. And join our comminity. It's free. </h5>
           <br/>
            <input
            type="text"
            placeholder="Your Name"
            autoFocus
            required
            />
            <br/>
             <input
            type="text"
            placeholder="Your Mail"
            // autoFocus
            required
            />
            <br/>
            <input 
            type="password"
            placeholder="Password"
            required
            />
            <div className="btnContainer">
                    <>
                    
                    <label className="custom-control-label"for="customCheck">Remember Me</label>
                    <button >Create Accounts</button>
                    <p> {/* Dont have an account? */}
                        <br/>
                        Forgot password?
                        </p> 
                    </>
            </div>
        </div>
       </section>
    )
}

export default Signin;