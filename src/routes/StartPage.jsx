import img1 from '../img/img1.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

    const navigate = useNavigate()  //esta es una funcion que se usa para cambiar la direccion en la barra de direcciones
                                    //si cambia la direccion cambia el componente que se renderiza
    return(
        <div className="StartPage">
            <img className='img1' src={img1}/>
            <h1>Bienvenido</h1>
            <h3>Este es el modulo para pacientes de MediApp</h3>
            <h4>
                Esta app funciona para que nuestros pacientes puedan registrarse
                y estar atentos a la informacion de sus consultas.
            </h4>
            <div className='startPageButtons'>
                <Button onClick={ () => {navigate('/CheckOut'), []} } size='large' variant='contained'>Iniciar sesion</Button>
                <Button onClick={ () => {navigate('/register'), []} } size='large' variant='contained'>Registrarse</Button>
            </div>
        </div>
    )
}

export default StartPage;