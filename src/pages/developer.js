import { Link, useParams } from 'react-router-dom';
import Layout from '../layouts/layout';

const Developer = () => {
  const { developerId } = useParams();
  return (
    <Layout>
      <div className="info">
        <div className="img">
          <img
            src="https://avatars3.githubusercontent.com/u/639098?s=460&v=4"
            alt="developer"
          />
          <h1>
            Amandla Steinberg
            {' '}
            {developerId}
          </h1>
          <p>Nairobi, Kenya</p>
          <div className="status">
            <span className="dot" />
            <p>Available</p>
          </div>
        </div>
        <div className="info-text">
          <h2>
            <span>💻 Full Stack Developer</span>
            <span>$30.00/hr 💸</span>
          </h2>
          <p className="bio">
            <p>
              I&apos;m an experienced enthusiastic music producer/composer,
              mixing, and mastering engineer. I love helping artists and
              entrepreneurs progress using their vision and my creativity
              combined.
            </p>
            <br />
            <p>
              I&apos;ve worked on various tracks and hosted live virtual music
              production sessions with artists, songwriters, and
              instrumentalists from across the globe; this is my passion. I will
              do anything I can to help you while sharing the knowledge
              I&apos;ve gathered during my years in the music business and being
              an entrepreneur myself.
            </p>
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <span>HTML</span>
              </li>
              <li>
                <span>CSS</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>React</span>
              </li>
              <li>
                <span>Ruby</span>
              </li>
              <li>
                <span>Rails</span>
              </li>
              <li>
                <span>Postgresql</span>
              </li>
              <li>
                <span>MongoDB</span>
              </li>
              <li>
                <span>Git</span>
              </li>
              <li>
                <span>Github</span>
              </li>
              <li>
                <span>Heroku</span>
              </li>
              <li>
                <span>Netlify</span>
              </li>
            </ul>
          </div>
          <div className="reserve">
            <Link to="/reserve">
              reserve
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Developer;
