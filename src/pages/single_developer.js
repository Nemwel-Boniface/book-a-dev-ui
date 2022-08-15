import React from 'react';
import { Link } from 'react-router-dom';
import developers from '../helpers/developers.json';

const SingleDeveloper = () => (
  <section className="dev-card">
    <div className="dev-list">
      {developers.map((developer) => (
        <div key={developer.id} className="item">

          <Link to={`${developer.id}`} key={developer.id}>
            <div className="image">
              <img src={developer.image_url} alt={developer.alt} />
            </div>

            <div>
              <h2>{developer.name}</h2>
              <p>{developer.description}</p>
              <ul className="social">
                {developer.medias.map((media) => (
                  <li key={media.id}>
                    <a href={media.media_url}>
                      <img src={media.icon} alt={media.alt} />
                    </a>
                  </li>

                ))}

              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default SingleDeveloper;
