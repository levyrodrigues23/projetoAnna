
import { Link } from "react-router-dom";
import "./header.css";

import fotoAna from "../../assets/anna.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="anna" src={fotoAna} alt="foto da ana" />
      <Link to="/">Home</Link>
      <Link to="/detalhes">Detalhes</Link>
      <Link to='/musicas'>Músicas</Link>
      <Link to="/fofa">Fotos</Link>
     
    </header>
  );
};

export default Header;
