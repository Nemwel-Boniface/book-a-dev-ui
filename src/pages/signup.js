import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/actions/user';

const Signup = () => {
  const { errorSignup = null, loadingSignup = false } = useSelector(
    (state) => state.user,
  );
  const [userSignup, setSignup] = useState({
    email: '',
    password: '',
    username: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signup(userSignup, navigate));
  };

  const handleOnChange = (event) => {
    setSignup((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="wrapperForm">
      <div className="form-section">
        <h1>Sign Up</h1>
        <form onSubmit={handleLogin} className="form">
          {errorSignup && (
            <div className="w-3/4">
              <p>Username/Email already exist</p>
            </div>
          )}
          <input
            onChange={handleOnChange}
            type="text"
            name="username"
            placeholder="Username"
            required
            value={userSignup.username}
            className="field"
          />
          <input
            onChange={handleOnChange}
            type="email"
            name="email"
            placeholder="Email"
            required
            value={userSignup.email}
            className="field"
          />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="6"
            value={userSignup.password}
            className="field"
          />

          {loadingSignup && (
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

          <button type="submit" className="submit_btn">
            Sign Up
          </button>
          <p className="not_member">
            Already a member?
            {' '}
            {' '}
            <Link to="/">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
