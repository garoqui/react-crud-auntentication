import react from 'react'
import FormLogin from './formLogin'
import './login.css'
import MainMenu from "../menu/menu"


const Login = () => {
    return (
        <div class="container-login">
            <h1>Iniciar Sesion</h1>
            <FormLogin></FormLogin>
        </div>

    )
}

export default Login