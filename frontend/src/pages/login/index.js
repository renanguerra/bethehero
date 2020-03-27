import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './styles.css'
import image from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

function Login() {
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        try {
            const response = await api.post('/profile',{id})

            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName', response.data.nome)
        }
        catch (err){
            alert('Erro no login, tente novamente!')
        }

        history.push('/profile')
    }
    
    
    return(
    <div className="login-container">
        <section className="form">

            <img src={logo} alt="logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input placeholder="Digite seu id" valeu={id} onChange={e => setId(e.target.value)}/>
                <button className="button" type="submit">Fazer login</button>
                
                <Link className="back-link" to="/register">
                <FiLogIn size="14" color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>

        </section>

        <img src={image} alt="heroes"/>

    </div>
    )
}

export default Login;