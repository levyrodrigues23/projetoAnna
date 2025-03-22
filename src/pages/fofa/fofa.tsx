import './fofa.css';
import { Link } from 'react-router-dom';

// Importando as imagens do diretório assets
import foto1 from '../../assets/anna1.jpg';
import foto2 from '../../assets/anna2.jpg';
import foto3 from '../../assets/anna3.jpg';
import foto4 from '../../assets/anna4.jpg';
import foto5 from '../../assets/anna5.jpg';
import foto6 from '../../assets/anna6.jpg';
import foto7 from '../../assets/anna7.jpg'; // Adicionando mais fotos
import foto8 from '../../assets/anna8.jpg';
import foto9 from '../../assets/anna9.jpg';

const Fofa = () => {
  return (

    <div className="container">
      <h1>Algumas fotos minhas :)</h1>
      <div className="photo-grid">
        <img src={foto1} alt="Foto 1" className="photo" />
        <img src={foto2} alt="Foto 2" className="photo" />
        <img src={foto3} alt="Foto 3" className="photo" />
        <img src={foto4} alt="Foto 4" className="photo" />
        <img src={foto5} alt="Foto 5" className="photo" />
        <img src={foto6} alt="Foto 6" className="photo" />
        <img src={foto7} alt="Foto 7" className="photo" />
        <img src={foto8} alt="Foto 8" className="photo" />
        <img src={foto9} alt="Foto 9" className="photo" />
      </div>
      <Link className='linkhome' to='/'> Voltar para Home</Link>
    </div>
  );
};

export default Fofa;
