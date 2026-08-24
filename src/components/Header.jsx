import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // roda quando o componente monta E toda vez que a rota muda
  // (o Header nunca desmonta, então sem o location.pathname aqui
  // ele nunca soubesse que acabou de logar/deslogar)
  useEffect(() => {
    setLogado(localStorage.getItem("logado") === "true");
    setUsuario(localStorage.getItem("usuario") || "");
  }, [location.pathname]);

  function logout() {
    localStorage.removeItem("logado");
    setLogado(false);
  }

  return (
    <header className="hero">
      <div className="hero-left">
        <h1 id="boasVindas">
          {logado
            ? `Bem-vindo, ${usuario}!`
            : "Bem-vindo! Clique ao lado para fazer login."}
        </h1>

        {!logado && (
          <button
            className="header-login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {logado && (
          <button className="header-login-btn logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>

      <nav className="menu-hero">
        <ul className="menu-hero-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#ideias">Ideias</a></li>
          <li><a href="#grupo">Grupo</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
