import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeveloper, deleteDeveloper } from '../redux/actions/developers';
import Layout from '../layouts/layout';
import { useNavigate } from "react-router-dom";

const Developer = () => {
  const { developerId } = useParams();
  const dispatch = useDispatch();
  const { developer } = useSelector((state) => state.developer);
  useEffect(() => {
    dispatch(fetchDeveloper(developerId));
  }, []);
  const navigate = useNavigate()
  const handleDelete = () => {
    navigate("/developers");
    dispatch(deleteDeveloper({developerId}))
  }
  return (
    <Layout>
      {
        Object.keys(developer).length ? (
          <div className="info">
            <div className="img">
              <img
                src={developer.icon}
                alt={developer.name}
              />
              <h1>
                {developer.name}
              </h1>
              <p>{developer.location}</p>
              <div className={`status ${developer.available ? 'green' : 'grey'}`}>
                <span className="dot" />
                <p>Available</p>
              </div>
            </div>
            <div className="info-text">
              <h2>
                <span>
                  💻
                  {' '}
                  {developer.title}
                </span>
                <span>
                  $
                  {developer.hourly_rate}
                  .00/hr 💸
                </span>
              </h2>
              <p className="bio">{developer.bio}</p>
              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  {
                developer.tech_stack.split(',').map((tech) => (
                  <li key={tech}>
                    <span>{tech}</span>
                  </li>
                ))
              }
                </ul>
              </div>
              <div className="reserve">
                <button
                  onClick={handleDelete}
                >
                  Delete

                </button>
              </div>
              <div className="reserve">
                <Link
                  to={`/create_reservation/?developerId=${developerId}`}
                >
                  Reserve

                </Link>
              </div>
            </div>
          </div>
        )
          : 'Loading developer info...'
      }
    </Layout>
  );
};

export default Developer;
