import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/user';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout(navigate));
  };
  return (
    <header className="header">
      <div>
        <h1>
          Welcome,
          {' '}
          {
            user?.name
            }
          !

        </h1>
      </div>
      <div>
        <button type="button" className="submit_btn" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </header>

  );
};

export default Header;
