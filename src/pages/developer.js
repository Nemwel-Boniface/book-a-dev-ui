import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeveloper } from '../redux/actions/developers';
import Layout from '../layouts/layout';

const Developer = () => {
  const { developerId } = useParams();
  const dispatch = useDispatch();
  const { developer } = useSelector((state) => state.developer);
  useEffect(() => {
    dispatch(fetchDeveloper(developerId));
  }, []);
  return (
    <Layout>
      <div className="info">
        <div className="img">
          <img
            src={developer.data.icon}
            alt={developer.data.name}
          />
          <h1>
            {developer.data.name}
          </h1>
          <p>{developer.data.location}</p>
          <div className={`status ${developer.data.available ? 'green' : 'grey'}`}>
            <span className="dot" />
            <p>Available</p>
          </div>
        </div>
        <div className="info-text">
          <h2>
            <span>
              💻
              {' '}
              {developer.data.title}
            </span>
            <span>
              $
              {developer.data.hourly_rate}
              .00/hr 💸
            </span>
          </h2>
          <p className="bio">{developer.data.bio}</p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              {
                developer.data.tech_stack.split(',').map((tech) => (
                  <li key={tech}>
                    <span>{tech}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="reserve">
            <Link to="/reserve">reserve</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Developer;
