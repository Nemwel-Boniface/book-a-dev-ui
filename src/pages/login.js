import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const Login = () => {
  const { errorLogin, loadingLogin } = useSelector((state) => state.user);
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userLogin, navigate));
  };

  const handleOnChange = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="wrapperForm">
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="form">
          {loadingLogin && (
            <div>
              <ThreeDots
                height="180"
                width="180"
                radius="3"
                color="#98be20"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          )}

          {errorLogin && <p>{errorLogin}</p>}
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
            Log In
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
