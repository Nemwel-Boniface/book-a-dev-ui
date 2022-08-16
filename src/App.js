import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Developers from './pages/developers';
import Developer from './pages/developer';
import Login from './pages/login';
import FormReservation from './pages/reserveForm';
import CreateDev from './pages/create_dev';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<Developer />} />
        <Route path="new_dev" element={<Developer />} />
        <Route path="reservation_form" element={<FormReservation />} />
        <Route path="create_dev" element={<CreateDev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
