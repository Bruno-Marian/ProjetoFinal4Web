import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HttpContext } from "../../utils/http";

export default function CadastrarUsuario() {
    const { post } = useContext(HttpContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    function cadastrar() {
        let usuario = {
            "login": login,
            "senha": senha
        }

        post("/usuario", usuario);
        navigate("/listarUsuario");
    }
    
    return (
        
        <form className="caixa" method="POST">
		<h3 className="mb-4">Cadastro de Usuário</h3>
		<div>
			<div className="col-6 mx-auto">
                <div className="conteudo text-center">
                    <div className="form-group">
                        <label>Usuário</label> <input type="text" id="login"
                            name="login" className="form-control"
                            onChange={txt => setLogin(txt.target.value)}
                            value={login} required/>
                    </div>
                    <div className="form-group">
                        <label>Senha</label> <input type="password" id="senha" name="senha"
                            className="form-control" 
                            onChange={txt => setSenha(txt.target.value)}
                            value={senha} required/>
                    </div>
                </div>
			</div>
		</div>
		<div className="row justify-content-end">
			<div className="col-md-2">
				<button type="submit" className="btn btn-primary float-right"
					onClick={cadastrar}>Gravar</button>
			</div>
		</div>
        </form>
    );
}