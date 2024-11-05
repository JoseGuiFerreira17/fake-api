import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="nf-container">
      <h1 className="nf-h1">404</h1>
      <p className="nf-p">Página não encontrada</p>
      <Link className="nf-a" to="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
