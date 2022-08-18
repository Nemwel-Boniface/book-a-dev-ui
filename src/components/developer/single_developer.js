import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleDeveloper = ({ developer }) => (
  <Link to={`/developers/${developer.id}`} className="devs-card">
    <div className="image">
      <img src={developer.icon} alt={developer.name} />
    </div>

    <div>
      <h2>{developer.name}</h2>
      <p>{developer.bio}</p>
      <ul className="tech_stack">
        {developer.tech_stack.map((tech) => (
          <li key={tech.name}>{tech.name}</li>
        ))}
      </ul>
    </div>
  </Link>
);

SingleDeveloper.propTypes = {
  developer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tech_stack: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default SingleDeveloper;
