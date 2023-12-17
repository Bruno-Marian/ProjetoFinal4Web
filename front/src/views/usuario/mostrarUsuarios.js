import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { HttpContext } from "../../utils/http";

export default function MostrarUsuarios(props) {
    const { remove } = useContext(HttpContext);
    function excluir() {
        remove(`/usuario/${props.usuario.id}`);
        alert("Usuário removido com sucesso!");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (

        <div className="container">
            <div className="card col-md-12">
                <div className="card-body">
                    <h3 className="card-title">{props.usuario.login}</h3>
                    <img src="https://imgb.ifunny.co/images/21cf6596e35daf097000a3f7cfde1c1ae9b6f6e05ad3bf725bdfab39365f8a9c_1.webp"
                        className="card-img-top" alt="..."></img>
                    <div className="mt-3 d-flex justify-content-between">
                        <Link to={`/usuario/editar/${props.usuario.id}`}>
                            <button
                                className="btn btn-outline-primary"
                            >Editar</button>
                        </Link>
                        <button
                            onClick={excluir}
                            className="btn btn-outline-primary"
                        >Excluir</button>
                    </div>

                </div>
            </div>
        </div>
    )
}