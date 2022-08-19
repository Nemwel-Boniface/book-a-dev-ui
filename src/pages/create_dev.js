import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newDev } from '../redux/actions/developers';
import Layout from '../layouts/layout';

const CreateDev = () => {
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

  const handleChange = (e) => {
    const { target } = e;

    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.name === 'hourly_rate' || target.name === 'experience') {
      value = parseInt(value, 10);
    }

    setdev({
      ...dev,
      [target.name]: value,
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newDev(dev, navigate, e));
  };

  return (
    <Layout>
      <section className="form-section">
        <h1>Create a new developer</h1>

        <div>
          <form className="form" onSubmit={handleSubmit}>
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
              type="text"
              pattern="[0-100]*"
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
              type="text"
              pattern="[0-100]*"
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
              type="tel"
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
                value={dev.available}
                onChange={handleChange}
                required
              />
              Are you available to work?
            </label>
            <button className="submit_btn" type="submit">
              Create developer
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateDev;
