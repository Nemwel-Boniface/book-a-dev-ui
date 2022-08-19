import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleDeveloper = ({ developer }) => (
  <Link to={`/developers/${developer.id}`} className="devs-card">
    <img src={developer.icon} alt={developer.name} className="image" />

    <div className="dev-info">
      <h2>{developer.name}</h2>
      <h3>{developer.title}</h3>
      <div className={`status ${developer.available ? 'green' : 'grey'}`}>
        <span className="dot" />
        <p>Available</p>
      </div>
      <p className="price">
        $
        {developer.hourly_rate}
        /hr
      </p>
    </div>
  </Link>
);

SingleDeveloper.propTypes = {
  developer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    hourly_rate: PropTypes.number.isRequired,
    tech_stack: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleDeveloper;
