import './login_signup_style.css';
import React from "react";
function LoginSignUp_UI(props) {
  return (
    <div className="Login_Page">
      {/* Divider first*/}
      <div className="LoginSignUp_divider_first">
        <h3 id="LoginSignup_AppName">ChatApp</h3>
        <form className="LoginSignUp_form">
          <p id="Login_text">Login</p>
          <label>
            Username:
            <input type="text" name="name" onChange={(e) => { props.data.username = e.target.value }} />
          </label>
      
          <label>
            Password:
            <input type="text" name="name" onChange={(e) => { props.data.password = e.target.value }} />
          </label>
        </form>
        <div className="LoginSignup_btn_divider">
          <button id="btn_attempt_login_signup" onClick={() => props.attemptLogin()}>Login</button>
          <button id="btn_attempt_login_signup_secondary" onClick={() => props.handlecurrentPage()}>{(props.isLoginPageVisible == true) ? ("Login") : ("Signup")}</button>
        </div>
      </div>
    </div>

  )
}
export default LoginSignUp_UI;