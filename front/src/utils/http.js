import React, { createContext, useContext } from "react";
import { GlobalContext, useLocalStorage } from "./global";

export const HttpContext = createContext();
const HttpProvider = ({ children }) => {
  const { global, setLogoutTela, setLogout } = useContext(GlobalContext);
  const initialState = {
    host: "0.0.0.0",
    port: 7005,
    token: "",
  };
  const [http, setHttp] = useLocalStorage("httpStore", initialState);

  const preparyUrl = () => {
    if (http.host === "0.0.0.0"){
      http.host = "localhost";
    }
    return `http://${http.host}:${http.port}/`;
  };

  const saveHttp = (todo) => {
    setHttp({ ...http, ...todo });
    http.host = todo.host;
    http.port = todo.port;
  };

  const clearHttp = () => {
    setHttp(initialState);
  };

  const request = ({
    metodo = "GET",
    path = null,
    body = null,
    token = true,
    logout = true
  }) => {
    if (path === undefined) {
      return "path vazio";
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (token) {
      if (token) {
        myHeaders.append("Authorization", "Bearer " + http.token);
      } else {
        return;
      }
    }
    let url = preparyUrl() + path;
    let settings = {
      method: metodo,
      headers: myHeaders,
      crossDomain: true,
    };

    if (body) {
      settings.body = JSON.stringify(body);
      settings.crossDomain = true;
    }
    try {
      let response = fetch(url, settings)
        .then((res) => {
          if ((res.status === 401) || (res.status === 404)) {
            setLogoutTela(true);
          } else if (global.loginTela && logout) {
            setLogoutTela(false);
          }
          return res;
        })
        .then((res) => {
          
          return res.json();
        })
        .catch((error) => {setLogout()});
      return response;
    } catch (error) {
      return error;
    }
  };

  const get = (path, body = null, logout=true) => {
    try {
      let data = request({
        path: path,
        logout:logout,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  const post = (path, body = null) => {
    try {
      let data = request({
        metodo: "POST",
        path: path,
        body: body,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  const put = (path, body = null) => {
    try {
      let data = request({
        metodo: "PUT",
        path: path,
        body: body,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  const login = async (values) => {
    try {
      let data = await request({
        metodo: "POST",
        token: false,
        path: "app/token",
        body: {
          username: values.user,
          password: values.password,
        },
      });
      if (data) {
        if (data.access_token !== "") {
          setHttp({ ...http, token: data.access_token });
          return data;
        }
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <HttpContext.Provider
      value={{ request, get, post, put, login, http, saveHttp, clearHttp }}
    >
      {children}
    </HttpContext.Provider>
  );
};

export default HttpProvider;
