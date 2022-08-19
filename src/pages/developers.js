import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDevelopers } from '../redux/actions/developers';
import Layout from '../layouts/layout';
import SingleDeveloper from '../components/developer/single_developer';

const Developers = () => {
  const dispatch = useDispatch();
  const { developers } = useSelector((state) => state.developer);
  useEffect(() => {
    dispatch(fetchDevelopers);
  }, []);

  return (
    <Layout>
      <div className="devs">
        <h1 className="title">Developer List</h1>
        <p className="desc">Please select a developer</p>

        <div className="dev_wrapper">
          {developers.data
            ? developers.data.map((developer) => (
              <SingleDeveloper developer={developer} key={developer.id} />
            ))
            : 'No developers found'}
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
