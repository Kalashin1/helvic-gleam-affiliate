import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-settings';

const ForgotPassword = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');

  let requestPasswordResetLink = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email)
      localStorage.setItem('userEmail', email)
      alert('password reset email sent');
      await navigate('/login')
    }
    catch (error) {
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
                <h4>Forgot Password</h4>
              </div>
              <div className="card-body">
                <p className="text-muted">We will send a link to reset your password</p>
                <form onSubmit={requestPasswordResetLink}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" name="email" tabindex="1" required autofocus />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" tabindex="4">
                      Forgot Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
 
export default ForgotPassword;