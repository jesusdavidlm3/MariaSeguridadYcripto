import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Root from './routes/Root.jsx'
import StartPage from './routes/StartPage.jsx'
import Register from './routes/Register.jsx'
import CheckOut from './routes/CheckOut.jsx'
import './styles.scss'

const router = createBrowserRouter([    //creamos un router que va a hacer que en direcciones diferentes en la barra
    {                                   //de navegacion renderice distintos componentes
        path:'/',   //en el directorio raiz...
        element: <Root/>,   //renderizamos el componente root
        errorElement: <ErrorPage/>, //establecemos la que sera la pagina que se mostrara en caso de cualquier error
        children:[  //subdireciones que renderizaran componentes distintos dentro del directorio raiz
            {
                path: '/inicio',
                element: <StartPage/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/CheckOut',
                element: <CheckOut/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='container'>
        <RouterProvider router={router}/>   
    </div>
)
