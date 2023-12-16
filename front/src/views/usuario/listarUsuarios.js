import React, { useContext, useEffect, useState } from "react";
import { HttpContext } from "../../utils/http";
import MostrarUsuarios from './mostrarUsuarios';

export default function ListarUsuario() {
    const { get } = useContext(HttpContext);
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        async function ConsultarUsuario() {        
        let response = await get("/usuario");
        setUsuarios(response);
        }
        ConsultarUsuario();
    }, [get]);

    
    return (
        <div class="col-4 mx-auto">
		<div className="conteudo text-center">
		<h3>Usuários</h3>
		<div className="col-4 mx-auto">
            {
                usuarios.map(usuario => <MostrarUsuarios usuario={usuario}/>)
            }
        </div>
	</div></div>
    );
}