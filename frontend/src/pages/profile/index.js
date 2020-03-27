import React,{useEffect, useState} from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile(){
    const ongId = localStorage.getItem('ongId')
    const ongNome = localStorage.getItem('ongName')
    const [incidents, setIncidents] = useState([])
    const history =useHistory();

    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
                setIncidents(response.data)
            })
    }, [ongId])

    async function handleDelete(id){
        try {
           await api.delete(`casos/${id}`,{
            headers: {
                Authorization: ongId,
            }
        })
        setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err){
            alert('Deu error')
        }
    }

    async function handleLogout(){
        localStorage.clear()
        history.push('/')

    }

    return(
        <div className='profile-container'>
            <header>
                <img src={logo} alt='logo'/>

                <span>Bem vinda, {ongNome}</span>

                <Link className='button' to='/profile/new' style={{width: 180}} >
                    Criar novo caso
                </Link>

                <button onClick={handleLogout} type='button'>
                    <FiPower size='18' color='#E02041'/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASOS:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDelete(incident.id)} type='button'>
                    <FiTrash2 sizer='20' color='#a8a8b6'/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}