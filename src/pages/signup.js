import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/actions/user';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [userSignup, setSignup] = useState({
    email: '',
    password: '',
    username: '',
    name: '',
  });

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setSignup((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      dispatch(signup(userSignup, navigate));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="wrapperForm">
      <div className="form-section">
        <h1>Sign Up</h1>
        <form onSubmit={handleLogin} className="form">
          {user.error && (
            <div className="error_message">
              <p>Wrong user credentials or An error occured</p>
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
            type="text"
            name="name"
            placeholder="Full name"
            required
            value={userSignup.name}
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

          <button type="submit" className="submit_btn" disabled={loading}>
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
              'Sign Up'
            )}
          </button>
          <p className="not_member">
            Already a member?
            {' '}
            <Link to="/">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
