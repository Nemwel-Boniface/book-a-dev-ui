import { PropTypes } from 'prop-types';
import SideBar from '../components/sidebar/sidebar';

const Layout = ({ children }) => (
  <>
    <SideBar />
    <main className="main">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
