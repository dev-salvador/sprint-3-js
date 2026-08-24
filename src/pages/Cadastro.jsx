import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Cadastro() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  // gera uma senha forte aleatória (letras maiúsculas, minúsculas, números e símbolos)
  // e já preenche o campo de senha, pra caso o usuário não saiba criar uma
  function gerarSenhaForte() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    const tamanho = 12;

    let senhaGerada = "";
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senhaGerada += caracteres[indiceAleatorio];
    }

    setSenha(senhaGerada);
    setMostrarSenha(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (usuario.length < 3) {
      alert("O usuário precisa ter pelo menos 3 caracteres.");
      return;
    }

    if (senha.length < 8) {
      alert("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  }

  return (
    <div className="auth-body">
      <div className="auth-card">
        <h1>Cadastro</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value.trim())}
          />

          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className="btn-cadastro">
            Cadastrar
          </button>
        </form>

        <Link to="/login" className="auth-link">
          Já tenho conta
        </Link>

        <button
          type="button"
          className="btn-sugerir-senha"
          onClick={gerarSenhaForte}
        >
          Sugerir senha forte
        </button>

        {mostrarSenha && senha && (
          <p className="senha-sugerida-aviso">
            Senha gerada: guarde-a em um lugar seguro antes de continuar.
          </p>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
