import { TextField, Button } from "@mui/material"
import registerimage from '../img/icons/reg.png'
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import succesImage from '../img/icons/succes.png'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase'

const Register = () => {

    const auth = getAuth(); //esta es informacion para acceder a la gestion de usuario de firebase
    const [succes, setSucces] = useState(false) //este estado maneja si el usuario ya se registro con exito
    let patientName 

    async function saveUserInfo(uid){               //esta funcion asincrona espera a que se le pase el identificador de usuario
        await setDoc(doc(db, "pacientes", uid), {   //que devuelve el metodo de inicio de sesion para almacenarla en la bdd
            name: patientName,                      //junto con el nombre del usuario
            uid: uid,
            });
    }

    const handleSubmit = (e) => {                   //esta funcion se ejecuta cuando se envian los datos del formulario
        e.preventDefault()                          //para almacenarlos y despues enviarlos a firebase auth
        patientName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        createUserWithEmailAndPassword(auth, email, password)   //esta envia los datos captados a firebase auth
        .then((userCredential) => {
            const user = userCredential.user;   //esta es la informacion de usuario que devuelve el metodo de registro
            if(user != null){           //si la informacion de usuario existe...
                setSucces(true)         //cambiamos el estado de registro a true para renderizar un mensaje de exito.
                saveUserInfo(user.uid)  //enviamos el identificador del usuario al metodo de bdd para almacenarlo
            }
        })
    }



    return(
        <div className="Register">
            { succes ? (    //si success es true renderizamos este mensaje de exito
                <div className="RegisterSuccesfull">
                    <img className="logo" src={succesImage} />
                    <h1>Registro Completado</h1>
                </div>
            ) : (   //si success es false (predeterminado) renderizamos el formulario de registro
                <form onSubmit={handleSubmit}>
                    <img className="logo" src={registerimage}/>
                    <h1>Registrate</h1>
                    <TextField variant="filled" type="text" label='Nombre'/>
                    <TextField variant="filled" type="email" label='Correo'/>
                    <TextField variant="filled" type="password" label='Contraseña'/>
                    <Button variant="contained" type="submit">Registrarse</Button>
                </form>
            ) }
        </div>
    )
}

export default Register;