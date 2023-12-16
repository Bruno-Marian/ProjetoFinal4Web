import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HttpContext } from "../../utils/http";

export default function EditarUsuario() {
    const { put, get } = useContext(HttpContext);
    const navigate = useNavigate();
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    const { idUsuario } = useParams()

    function editar() {
        let usuario = {
            "login": login,
            "senha": senha
        }

        put(`/usuario/${idUsuario}`, usuario);
        navigate("/listarUsuario");
    }

    useEffect(() => {  
        
        async function ConsultarUsuario(){
            // eslint-disable-next-line no-template-curly-in-string
            let usuario = await get(`/usuario/${idUsuario}`);

            setLogin(usuario.login);
            setSenha(usuario.senha);
        } ConsultarUsuario()
    },
    [get, idUsuario])
    
    return (
        
        <form className="caixa" method="POST">
		<h3 className="mb-4">Editar de Usuário: {idUsuario}</h3>
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
					onClick={editar}>Gravar</button>
			</div>
		</div>
        </form>
    );
}