import { useSelector } from 'react-redux';
import Layout from '../layouts/layout';
import SingleDeveloper from '../components/developer/single_developer';

const Developers = () => {
  const { developers, error } = useSelector((state) => state.developer);

  return (
    <Layout>
      <div className="devs">
        <h1 className="title">Developer List</h1>
        <p className="desc">Please select a developer</p>

        <div className="dev_wrapper">
          {!error && developers
            ? developers.map((developer) => (
              <SingleDeveloper developer={developer} key={developer.id} />
            ))
            : 'No developers found'}
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
