import React, { useState } from 'react';

const DevForm = () => {
  const [dev, setdev] = useState({
    name: '',
    icon: '',
    title: '',
    location: '',
    tech_stack: '',
    email: '',
    github: '',
    linkedin: '',
    phone: '',
    resume: '',

  });

  const handleChange = (e) => {
    setdev({
      ...dev,
      [e.target.name]: e.target.value,
    });
  };
  const titles = ['Fullstack', 'Frontend', 'Backend', 'Android'];
  return (
    <>
      <form
        className="form"
      >
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
        <input
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
        />

        <select
          className="field"
          name="title"
          onChange={handleChange}
          value={dev.title}
        >
          {titles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
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
          placeholder="Write all stack that apply"
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
          placeholder="Email"
          type="email"
          name="email"
          value={dev.email}
          minLength="1"
          maxLength="100"
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
          name="resume"
          value={dev.resume}
          minLength="1"
          maxLength="100"
          onChange={handleChange}
          required
        />
        <button
          className="field"
          type="submit"
        >
          Create developer
        </button>
      </form>
    </>
  );
};

export default DevForm;
