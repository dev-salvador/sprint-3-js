import v70 from "../assets/imagens/V70.png";
import v701 from "../assets/imagens/V701.png";

// Componente simples: só exibe as duas imagens girando.
// A animação inteira (orbita1 / orbita2) fica no CSS, sem delay aleatório.
function ImagensOrbitando() {
  return (
    <div className="imagens">
      <img src={v70} alt="Carro V70" className="img img1" />
      <img src={v701} alt="Carro V70 variação" className="img img2" />
    </div>
  );
}

export default ImagensOrbitando;
