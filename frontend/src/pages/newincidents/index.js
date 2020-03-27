import React, { useState } from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId')

    const history = useHistory();

    async function HandleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            ongId
        }

        try {
            await api.post('casos', data , {
                headers: {
                    Authorization: ongId,
                }
            })
            alert('Caso criado com sucesso!')
            history.push('/profile')
        }
        catch (err){
            alert('Erro ao cadastrar, tente novamente!')
        }


    }

    return(
        <div className='newIncidents-container'>
              <div className="content">
                <section>
                    <img src={logo} alt="logo"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva um caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="14" color="#E02041"/>
                        Voltar para a home
                    </Link>

                </section>

                <form onSubmit={HandleNewIncident}>
                    <input placeholder="Titulo do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <section>
                        <button type='button'> Cancelar </button>
                        <button className="button">Cadastrar</button>
                    </section>
                </form>
            </div>
        </div>
    )
}