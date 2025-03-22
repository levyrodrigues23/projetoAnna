
import { Link } from 'react-router-dom'
import './home.css'

import auau from '../../assets/auau.jpeg'

const Home = () => {
  return (
    <div className='home'>
        <h1>Você está na página de anna!</h1>
        <h2>sinta-se a vontade para saber tudo sobre mim :)</h2>
        <img className='auau' src={auau} alt="cachorro" />
        <div className='div'>
            <h1> Eu tenho 16 anos e gosto de arquitetura, mais detalhes você encontra <Link to='/detalhes'>aqui</Link></h1>
        </div>
    </div>
  )
}

export default Home