import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Developers from './pages/developers';
import Developer from './pages/developer';
import CreateDev from './pages/create_dev';
import Reservations from './pages/reservations';
import Login from './pages/login';
import FormReservation from './pages/reserveForm';
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Signup />} />
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<Developer />} />
        <Route path="create_dev" element={<CreateDev />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reservation_form" element={<FormReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
