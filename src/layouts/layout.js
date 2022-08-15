import { PropTypes } from 'prop-types';
import SideBar from '../components/sidebar/sidebar';

const Layout = ({ children }) => (
  <div className="wrapper">
    <SideBar />
    <main className="main">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
