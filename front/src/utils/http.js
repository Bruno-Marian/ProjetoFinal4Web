import React, { createContext } from "react";

export const HttpContext = createContext();
const HttpProvider = ({ children }) => {
  const preparyUrl = () => {
    return `http://localhost:8080`;
  };

  const request = ({
    metodo = "GET",
    path = null,
    body = null
  }) => {
    if (path === undefined) {
      return "path vazio";
    }
    
    let url = preparyUrl() + path;
    let settings = {
      method: metodo
    };

    if (body) {
      settings.headers = {"Content-Type": "application/json"};
      settings.body = JSON.stringify(body);
    }
    try {
        return fetch(url, settings)
                  .then(res => res.json())
                  .catch((error) => {});
    } catch (error) {
      return error;
    }
  };

  const get = (path, body = null) => {
    try {
      let data = request({
        path: path,
        body: body
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

  const remove = (path, body = null) => {
    try {
      let data = request({
        metodo: "DELETE",
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

  return (
    <HttpContext.Provider
      value={{ request, get, post, put, remove }}
    >
      {children}
    </HttpContext.Provider>
  );
};

export default HttpProvider;
