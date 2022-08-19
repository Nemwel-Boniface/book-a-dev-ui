import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const Login = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(login(userLogin, navigate));
    }, 1000);
  };
  return (
    <div className="wrapperForm">
      <div className="form-section">
        <h1>Log In</h1>
        <form onSubmit={handleLogin} className="form">
          {user.error && (
          <div className="error_message">
            <p>Wrong user credentials or User does not exist</p>
          </div>
          )}
          <input
            onChange={handleOnChange}
            type="email"
            name="email"
            id="signup-email-field"
            placeholder="Email"
            required
            className="field"
          />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            id="login-password-field"
            placeholder="Password"
            required
            className="field"
          />
          <button type="submit" className="submit_btn">
            {loading ? (
              <>
                <ThreeDots
                  height="15"
                  width="40"
                  radius="1"
                  color="#ffffff"
                />
              </>
            ) : (
              'Log In'
            )}
          </button>
          <span className="not_member">
            Not a member?
            {' '}
            <Link to="/registration">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
