import { useRef, useState } from "react";
import { auth, db } from "../firebase-settings";
import { createUserWithEmailAndPassword, sendEmailVerification } from "@firebase/auth";
import { setDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router";

const Register = () => {

  const signupForm = useRef(null);

  const [ showEmailError, setShowEmailError ] = useState(false)

  const navigate = useNavigate();

  const submit = async (e) => {
    try {
      e.preventDefault();
      setShowEmailError(false);
      const { firstName, lastName, email, password, passwordConfirm } = signupForm.current
      let formObject = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirm: passwordConfirm.value
      };
      if (formObject['confirm'] !== formObject['password']){
        throw Error('Passwords do not match');
      }
      const userCredentials = createUserWithEmailAndPassword(auth, formObject.email.toLowerCase(), formObject.password);
      const user = userCredentials.user;
      localStorage.setItem('userId', user.uid);
      console.log(user);
      setDoc(doc(db, 'affiliates', user.uid), {
        name: `${formObject.firstName} ${formObject.lastName}`,
        email: formObject.email,
        sales: [],
      })
      sendEmailVerification(auth.currentUser);
      await navigate('/login')
    } catch (error) {
      setShowEmailError(true);
      console.log(error);
    }
  }

  return (
    <div id="app">
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form method="POST" ref={signupForm} onSubmit={submit} name="signup">
                  <div className="row">
                    <div className="form-group col-6">
                      <label for="frist_name">First Name</label>
                      <input id="frist_name" required type="text" className="form-control" name="firstName" autofocus />
                    </div>
                    <div className="form-group col-6">
                      <label for="last_name">Last Name</label>
                      <input id="last_name" required type="text" className="form-control" name="lastName" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" required className="form-control" name="email" />
                    { 
                      showEmailError && 
                      (
                        <div className="text-danger my-2" style={{ fontSize: '.8rem'}}>
                          Email already in use
                        </div>
                      )
                    }
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label for="password" className="d-block">Password</label>
                      <input id="password" type="password" required className="form-control pwstrength" data-indicator="pwindicator"
                        name="password" />
                      <div id="pwindicator" className="pwindicator">
                        <div className="bar"></div>
                        <div className="label"></div>
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label for="password2" className="d-block">Password Confirmation</label>
                      <input id="password2" type="password" required className="form-control" name="passwordConfirm" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="agree" required className="custom-control-input" id="agree" />
                      <label className="custom-control-label" for="agree">I agree with the terms and conditions</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="mb-4 text-muted text-center">
                Already Registered? <a href="auth-login.html">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
 
export default Register;