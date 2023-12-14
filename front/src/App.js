import Login from "./views/login/login.js";
import './App.css';
import GlobalProvider from './utils/global.js';
import HttpProvider from './utils/http.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./views/layout/layout.js";
import PrivateRoute from "./views/privateRoute/privateRoute.js";

function App() {
  return (
    <GlobalProvider>
    <HttpProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              exact
              path="/layout"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </HttpProvider>
  </GlobalProvider>
  );
}

export default App;
