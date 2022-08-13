import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDevelopers } from '../redux/actions/developers';
import Developer from './developer';

const Developers = (id) => {
  const dispatch = useDispatch();
  const { developers } = useSelector((state) => state.developer);
  useEffect(() => {
    dispatch(fetchDevelopers);
  }, []);

  return (
    <section>
      <h1>Developer List</h1>
      <p>Please select a developer</p>

      <div>
        <Developer developpers={developers} key={id} />
      </div>

    </section>
  );
};

export default Developers;
