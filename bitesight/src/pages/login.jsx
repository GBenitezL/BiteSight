import React from "react";
import "./login.css";

const Login = () => {
  const handleFacebookLogin = () => {
    // handle Facebook login logic here
  };
  const handleGoogleLogin = () => {
    // handle Google login logic here
  };
  let width = window.innerWidth;
  return (
    <div className="row">
      <div className="column leftCol">
        <img src={require("../assets/logo.png")} className="Logo1" alt="logo" />
        <br />
        <img src={require("../assets/Full_Logo.png")} className="Logo2" alt="logo" />
      </div>
      <div className="column rightCol">
        <div className="botonesLogin">
        <h1 style={{ color: 'white', fontSize: '3rem' }}>Login</h1>
          <button onClick={handleFacebookLogin} style={{ width: '100%', maxWidth: '400px', height: '50px', padding: '10px', backgroundColor: '#3b5998', color: '#fff', border: '2px solid #737373', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            <img
              src={require("../assets/facebook.png")}
              alt="Facebook Logo"
              style={{
                width: '20px',
                height: '20px',
                marginRight: '10px'
              }}
            />
            Login with Facebook
          </button>
          <br />
          <br />
          <button onClick={handleGoogleLogin} style={{ width: '100%', maxWidth: '400px', height: '50px', padding: '10px', backgroundColor: '#fff', color: '#737373', border: '2px solid #737373', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
