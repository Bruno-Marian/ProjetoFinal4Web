import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from "../../utils/global"

export default function PrivateRoute({ children }) {
  const { global } = useContext(GlobalContext);
  const { login } = global;
  return login ? children : <Navigate to="/login" />;
}
