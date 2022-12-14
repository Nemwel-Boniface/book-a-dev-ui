import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from './redux/actions/reservation';
import { fetchDevelopers } from './redux/actions/developers';
import Developers from './pages/developers';
import Developer from './pages/developer';
import CreateDev from './pages/create_dev';
import Reservations from './pages/reservations';
import Login from './pages/login';
import CreateRes from './pages/reserveForm';
import Signup from './pages/signup';
import RequireAuth from './layouts/requireAuth';

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDevelopers);
  }, []);

  useEffect(() => {
    dispatch(fetchReservations);
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="developers" element={<Developers />} />
          <Route path="developers/:developerId" element={<Developer />} />
          <Route path="create_dev" element={<CreateDev />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="create_reservation" element={<CreateRes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
