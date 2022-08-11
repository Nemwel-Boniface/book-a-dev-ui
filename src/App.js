import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Developers from './pages/developers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
