import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { newDev } from '../redux/actions/developers';
import Layout from '../layouts/layout';

const CreateDev = () => {
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state) => state.developer);
  const [dev, setdev] = useState({
    name: '',
    icon: '',
    title: '',
    location: '',
    tech_stack: '',
    hourly_rate: '',
    github: '',
    linkedin: '',
    twitter: '',
    phone: '',
    bio: '',
    experience: '',
    available: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { target } = e;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    setdev({
      ...dev,
      [target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(newDev(dev, navigate));
    }, 1000);
  };

  return (
    <Layout>
      <section className="form-section">
        <h1>Create a new developer</h1>

        <div>
          <form className="form" onSubmit={handleSubmit}>
            {error && (
            <div className="error_message">
              <p>Wrong developer credentials or An error occured</p>
            </div>
            )}
            <input
              className="field"
              placeholder="Dev Name"
              type="text"
              name="name"
              minLength="3"
              maxLength="100"
              onChange={handleChange}
              value={dev.name}
              required
            />
            {/* <input
          className="field"
          placeholder="Dev icon"
          type="file"
          id="icon"
          name="icon"
          minLength="1"
          maxLength="100"
          onChange={handleChange}
          value={dev.icon}
          required
        /> */}
            <input
              className="field"
              placeholder="Icon"
              type="text"
              name="icon"
              minLength="3"
              maxLength="100"
              onChange={handleChange}
              value={dev.icon}
              required
            />

            <input
              className="field"
              type="text"
              name="title"
              placeholder="e.g Web Developer"
              value={dev.title}
              onChange={handleChange}
              required
            />
            <input
              className="field"
              type="text"
              name="location"
              placeholder="Location"
              value={dev.location}
              onChange={handleChange}
              required
            />
            <input
              className="field"
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={dev.experience}
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="Write all stack that apply separated by comma"
              type="text"
              name="tech_stack"
              value={dev.tech_stack}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="Hourly Rate"
              type="number"
              name="hourly_rate"
              value={dev.hourly_rate}
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="Github"
              type="url"
              name="github"
              value={dev.github}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="LinkedIn"
              type="url"
              name="linkedin"
              value={dev.linkedin}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="Twitter"
              type="url"
              name="twitter"
              value={dev.twitter}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="field"
              placeholder="Telephone"
              type="text"
              name="phone"
              value={dev.phone}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <textarea
              className="field"
              placeholder="Description"
              type="text"
              name="bio"
              value={dev.bio}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <label htmlFor="available">
              <input
                className="field"
                type="checkbox"
                id="available"
                name="available"
                checked={dev.available}
                value={dev.available}
                onChange={handleChange}
              />
              Are you available to work?
            </label>
            <button className="submit_btn" type="submit" disabled={loading}>
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
                'Create Developer'
              )}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateDev;
