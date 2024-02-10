import { useState } from "react"
import { Button, TextField } from "@mui/material"
import loginImage from '../img/icons/login.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import doctorLogo from '../img/icons/doctor.png'

const CheckOut = () => {

    const [logged, setLogged] = useState(false) //aqui se controla si es usuario inicio sesion
    const [dateExist, setDateExist] = useState(false)  //aqui se controla si existe la informacion de la cita en la bdd
    const [dateInfo, setDateinfo] = useState({ doctor: '', especialidad: '', fecha: '', hora: '' })

    async function getDateInfo(id){  //con esta funcion se obtenemos la informacion basada en el id del usuario
        const docref = doc(db, 'citas', id);
        const docSnap = await getDoc(docref);
        setDateinfo(docSnap.data())
        if(docSnap.data()){     //si la bdd devuelve informacion se marca este estado para renderizar la info
            setDateExist(true)  //de lo contrario se renderiza un mensaje de que no hay cita asignada
        }
    }

    const handleSubmit = (e) => {   //esta funcion se ejecuta cuando el usuario envia el formulario de login
        e.preventDefault()          //aqui se recopilan los datos para enviarlos a firebase auth
        const email = e.target[0].value
        const password = e.target[1].value

        signInWithEmailAndPassword(auth, email, password)   //funcion que envia los datos recogidos a firebase
        .then((userCredential) => {
            const user = userCredential.user;   //esta es la informacion del usuario que devuelve firebase
            if(user != null){   //si el usuaio existe...
                setLogged(true) //cambiamos el estado al de sesion iniciada para renderizar una respuesta
                let accessToken = user.uid  //almacenamo el identificador del usuario para enviarlo a la bdd y buscar el documento correspondiente.
                getDateInfo(accessToken)    //enviamos el identificador a la funcion que lo buscara en la bdd
            }
        })
    }

    return(
        <div className="CheckOut">
            { logged ? (    //si el estado de inicio de sesion es true renderizamos este parentesis
                <div className="info">
                    <img src={doctorLogo}/>
                    <h1>Bienvenido</h1>

                    { dateExist &&  //si la informacion de la cita existe renderizamos esto
                        <h3>Tu cita con el doctor {dateInfo.doctor}, especialista en {dateInfo.especialidad} es el dia {dateInfo.fecha} a las {dateInfo.hora}</h3>
                    }

                    { !dateExist && //si la informacion de la cita no existe renderizamos esto
                        <h3>Usted aun no posee cita registrada, por favor espere atento a que se le asigne una cita por este medio.</h3>
                    }
                </div>
            ) : (   ////si el estado de inicio de sesion es false (predeterminado) renderizamos este otro parentesis
                <form onSubmit={handleSubmit}>
                    <img className="logo" src={loginImage}/>
                    <h1>Inicia sesion</h1>
                    <TextField variant="filled" type="email" label='Correo' />
                    <TextField variant="filled" type="password" label='Contraseña' />
                    <Button variant="contained" type="submit">Iniciar sesion</Button>
                </form>
            ) }
        </div>
    )
}

export default CheckOut;