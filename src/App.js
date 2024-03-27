import './App.css';
import User from './pages/User';
import FormPage from './pages/FormPage';
import Admin from './pages/Admin';
import Response from './pages/Response';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (<div className='container'>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/formPage" element={<FormPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
