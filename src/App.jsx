import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MenuPrincipal from './Components/Menuprincipal/Menu.jsx';
import Login from './Components/Login/Login.jsx';
import Registro from './Components/Registro/Registro.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}