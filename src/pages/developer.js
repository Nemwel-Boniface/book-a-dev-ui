import React from 'react';
import { Link } from 'react-router-dom';

const Developer = (developers) => {

  return (
    <section>
    <div>
      {developers.map((developer) => (
        
        <Link to={`${developer.id}`} key={developer.id}>
          <div>
            <img src={developer.image_url} alt={developer.alt} />
          </div>

          <div>
            <h2>{developer.name}</h2>
            <p>{developer.description}</p>
            <ul>
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
      ))}
    </div>
  </section>
  ) 
};

export default Developer;
