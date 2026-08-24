import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");

    if (usuario === usuarioSalvo && senha === senhaSalva) {
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuario", usuario);
      alert("Login realizado com sucesso!");
      navigate("/");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="auth-body">
      <div className="auth-card">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value.trim())}
          />

          <input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <Link to="/cadastro" className="auth-link">
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default Login;
