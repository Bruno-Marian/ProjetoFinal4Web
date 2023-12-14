

export default function Login() {
    function logar() {
        
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
            <button  type="submit" class="btn btn-primary float-right" 
                onclick={logar}>Entrar</button>
        </div>
    )
}