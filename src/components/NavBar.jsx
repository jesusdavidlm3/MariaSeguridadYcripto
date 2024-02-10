import { useState } from "react"
import { Link } from "react-router-dom"
import BurgerMenu from '../img/icons/menu.png'

const NavBar = () => {

    const [menuState, setMenuState] = useState(false)

    return(
        <div className="NavBar">

            { menuState && 
                <div className="menuContent">
                    <img src={BurgerMenu} className="BurgerMenuIcon menuIcon" onClick={ () => setMenuState(!menuState) }/>
                    <div className="menuOptions">
                        <Link className="link" to='/inicio'> <p>Inicio</p> </Link>
                        <Link className="link" to='/register'> <p>Registrarse</p> </Link>
                        <Link className="link" to='/CheckOut'> <p>Checkear consulta</p> </Link>
                    </div>
                </div> 
            }

            { !menuState && 
                <img src={BurgerMenu} className="BurgerMenuIcon" onClick={ () => setMenuState(!menuState) }/> 
            }
            
            <h1>MediApp</h1>
        </div>
    )
}

export default NavBar