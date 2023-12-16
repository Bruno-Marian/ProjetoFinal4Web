import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HttpContext } from "../../utils/http";

export default function Login() {
    const { post } = useContext(HttpContext);
    const navigate = useNavigate();
    async function login() {
        let res = await post("/login", {"usuario": "admin", "senha": "admin"});
        if (res.statusCode === 200) {
            alert(res.message);
            navigate("/");
        } else {
            alert(res.message);
            return;
        }
    }
    
    return (
        <div className="container">
                <div className="form-group">
                    <label>Usuário</label>
                    <input type="text" className="form-control" id="login" name="login" />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" id="senha" name="senha" />
                </div>
                <button  type="submit" className="btn btn-primary float-right" onClick={login}
                    >Entrar</button>
        </div>
    )
}