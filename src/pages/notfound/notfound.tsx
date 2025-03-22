
import { Link } from "react-router-dom";
import "./notfound.css"; // Arquivo de estilos opcional

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página não encontrada!</p>
      <Link to="/">Voltar para a Home</Link>
      
    </div>
  );
};

export default NotFound;
