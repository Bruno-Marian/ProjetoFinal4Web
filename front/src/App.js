import Menu from "./views/menu/menu.js";
import CadastrarUsuario from "./views/usuario/cadastrarUsuario.js";
import ListarUsuario from "./views/usuario/listarUsuarios.js";
import './App.css';
import HttpProvider from './utils/http.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditarUsuario from './views/usuario/editarUsuario.js';

function App() {
  return (
    <HttpProvider>
      <Router>
        <div className="App">
          <Menu/>
          <Routes>
            <Route exact path='/' element={<CadastrarUsuario />} />
            <Route exact path='/listarUsuario' element={<ListarUsuario />} />
            <Route path='/usuario/editar/:idUsuario' element={<EditarUsuario />} />
          </Routes>
        </div>
      </Router>
    </HttpProvider>
  );
}

export default App;
