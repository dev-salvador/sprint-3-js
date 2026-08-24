import ImagensOrbitando from "../components/ImagensOrbitando";
import CardIdeia from "../components/CardIdeia";
import MembroGrupo from "../components/MembroGrupo";

// Dado que fica no componente "pai" (Home) e é distribuído para os filhos
const ideias = [
  {
    rota: "/camera-contextual",
    badge: "IA Mobile",
    titulo: "Câmera Contextual com IA",
    descricao:
      "Tecnologia que reconhece automaticamente cenários, interpreta o ambiente e ajusta câmera, lente, iluminação e foco em tempo real.",
    beneficios: [
      "Reconhecimento inteligente de cena",
      "Modo retrato, HDR, macro e noturno",
      "Experiência automática e prática",
    ],
  },
];

const membros = [
  { nome: "Gabriela do Rozario", rm: "569663" },
  { nome: "João Vitor de Mico", rm: "569412" },
  { nome: "Milena de Moraes", rm: "570604" },
  { nome: "Lucas Alberto de Souza Salvador", rm: "568843" },
];

function Home() {
  return (
    <>
      <section id="home" className="page-section home-section">
        <ImagensOrbitando />
      </section>

      <section id="ideias" className="page-section ideias-section">
        <div className="ideias-premium">
          <div className="ideias-topo">
            <span className="tag-ideias">Inovação & Futuro</span>
            <h2>Ideias</h2>
            <p>
              Conceitos tecnológicos modernos desenvolvidos para transformar
              experiência, inteligência artificial e inovação.
            </p>
          </div>

          <div className="ideias-grid">
            {ideias.map((ideia) => (
              <CardIdeia key={ideia.rota} {...ideia} />
            ))}
          </div>
        </div>
      </section>

      <section id="grupo" className="page-section grupo-section">
        <div className="ideias-text">
          <h2>Grupo</h2>
          {membros.map((membro) => (
            <MembroGrupo key={membro.rm} nome={membro.nome} rm={membro.rm} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
