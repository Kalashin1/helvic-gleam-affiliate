import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import { auth } from '../firebase-settings';

const Login = () => {
  const loginForm = useRef(null)
  const [ showEmailError, setShowEmailError ] = useState(false)
  const [ showPasswordError, setShowPasswordError ] = useState(false)

  const navigate = useNavigate();

  const submit = async (e) => {
    try {
      setShowEmailError()
      e.preventDefault();
      const form = loginForm.current;
      const { email, password } = form;
      const formObject = {
        email: email.value,
        password: password.value
      }
      console.log(formObject)
      const userCred = await signInWithEmailAndPassword(auth, formObject.email.toLowerCase(), formObject.password);
      console.log(userCred);
      const user = userCred.user;
      console.log(user);
      localStorage.setItem('userId', user.uid);
      await navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div id="app">
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form method="POST" name="login-form" ref={loginForm} onSubmit={submit} className="needs-validation" novalidate="">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" className="form-control" name="email" required autofocus />
                    <div className="invalid-feedback">
                      Please fill in your email
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label for="password" className="control-label">Password</label>
                      <div className="float-right">
                        <a href="auth-forgot-password.html" className="text-small">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input id="password" type="password" className="form-control" tabindex="2" required />
                    <div className="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" className="custom-control-input" id="remember-me" />
                      <label className="custom-control-label" for="remember-me">Remember Me</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" tabindex="4">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4 mb-3">
                  <div className="text-job text-muted">Login With Social</div>
                </div>
                <div className="row sm-gutters">
                  <div className="col-6">
                    <button className="btn btn-block btn-white btn-facebook">
                      <span className="fab fa-google"></span> Google
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-block btn-primary btn-twitter">
                      <span className="fab fa-twitter"></span> Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-muted text-center">
              Don't have an account? <a href="auth-register.html">Create One</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
 
export default Login;