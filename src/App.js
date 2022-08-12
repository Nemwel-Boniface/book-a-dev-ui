import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Developers from './pages/developers';
import Developer from './pages/developer';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
