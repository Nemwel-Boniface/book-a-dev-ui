import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { login } from '../redux/actions/user';

const Login = () => {
  const { errorLogin = null, loadingLogin = false } = useSelector((state) => state.user);
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
    <div className="form-section">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        { loadingLogin && (
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

        { errorLogin && (
          <p>Invalid email/password</p>
        )}
        <input onChange={handleOnChange} type="email" name="email" id="signup-email-field" placeholder="Email" required className="field" />
        <input onChange={handleOnChange} type="password" name="password" id="login-password-field" placeholder="Password" required className="field" />
        <span className="field">
          Not a member?
          <NavLink to="/registration">Register</NavLink>
        </span>
        <input type="submit" value="Login" className="field" />
      </form>
    </div>
  );
};

export default Login;
