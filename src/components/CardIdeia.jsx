import { Link } from "react-router-dom";

// Componente filho: recebe dados do pai (Ideias) via props
function CardIdeia({ rota, badge, titulo, descricao, beneficios }) {
  return (
    <Link to={rota} className="premium-card">
      <div className="premium-bg"></div>
      <div className="premium-content">
        <span className="premium-badge">{badge}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <ul className="card-benefits">
          {beneficios.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="premium-footer">
          <span>Ver ideia completa</span>
          <div className="arrow">→</div>
        </div>
      </div>
    </Link>
  );
}

export default CardIdeia;
