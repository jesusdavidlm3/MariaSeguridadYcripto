import { Link } from 'react-router-dom';
import errorLogo from '../img/icons/cerrar.png'

const ErrorPage = () => {
    return(
        <div className="ErrorPage">
            <img className='errorLogo' src={errorLogo}/>
            <h1>parece que algo ha salido mal</h1>
            <Link className='link' to={'/inicio'}> <h3>Presiona aqui para ir a la pagina principal</h3> </Link>
        </div>
    )
}

export default ErrorPage;