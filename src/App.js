import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Developers from './pages/developers';
import Developer from './pages/developer';
import CreateDev from './pages/create_dev';
import Reservations from './pages/reservations';
import Login from './pages/login';
import CreateRes from './pages/reserveForm';
import Signup from './pages/signup';
import RequireAuth from './layouts/requireAuth';

function App() {
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
