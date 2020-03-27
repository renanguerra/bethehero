import React, {useState} from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'



export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatssap, setWhatssap] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            whatssap,
            city,
            uf}

        try{
            const response = await api.post('users', data)
        alert(`seu id de acesso: ${response.data.id}`)
        history.push('/')

        } catch{
            alert('Erro no cadastro')
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda as pessoas a encontrarem os casos para sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="14" color="#E02041"/>
                        Voltar para o login
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatssap} onChange={e => setWhatssap(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{width: 80}} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}