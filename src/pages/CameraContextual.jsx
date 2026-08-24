import { Link } from "react-router-dom";

const dicas = [
  "Use o modo HDR à noite para realçar as sombras.",
  "O modo retrato realça o fundo automaticamente.",
  "O modo macro é ideal para fotos de detalhes.",
];

const dicaDoDia = dicas[Math.floor(Math.random() * dicas.length)];

function CameraContextual() {
  return (
    <main className="idea-page">
      <Link to="/#ideias" className="voltar-btn">
        ← Voltar para Ideias
      </Link>

      <h1>Câmera Contextual com IA</h1>

      <section className="idea-block">
        <h2>O que é?</h2>
        <p>
          Tecnologia de inteligência artificial aplicada à câmera do celular
          que reconhece automaticamente o cenário fotografado e ajusta, em
          tempo real, as melhores configurações.
        </p>
      </section>

      <section className="idea-block">
        <h2>Como funciona?</h2>
        <p>
          A IA identifica rostos, iluminação, distância, movimento,
          quantidade de pessoas e tipo de objeto para definir automaticamente
          o modo ideal.
        </p>
      </section>

      <section className="idea-block">
        <h2>Benefícios</h2>
        <ul>
          <li>Fotos mais bonitas automaticamente</li>
          <li>Menos erros de foco e iluminação</li>
          <li>Mais praticidade</li>
          <li>Experiência acessível para qualquer usuário</li>
        </ul>
      </section>

      <section className="idea-block">
        <h2>Dica do dia</h2>
        <p>{dicaDoDia}</p>
      </section>
    </main>
  );
}

export default CameraContextual;
