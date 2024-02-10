import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Root = () => {

    const navigate = useNavigate()
    useEffect( () => navigate('inicio'), [] )   //use effect realiza la funcion de navigate de forma inmediata
                                                //eso nos lleva a la subdireccion inicio y renderiza la startpage
    return(
        <div className="Root">
            <NavBar/>       {/*la navbar no se vuelve a renderizar con los cambios de direccion, ahorra recursos*/}
            <Outlet/>       {/* outlet es donde se renderizaran los componentes hijos de root */} 
        </div>
    )
}

export default Root;