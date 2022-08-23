import { PropTypes } from 'prop-types';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';

const Layout = ({ children }) => (
  <div className="wrapper">
    <SideBar />
    <main className="main">
      <Header />
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
