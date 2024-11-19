import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/cabecalho';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default async function Formulario() {
    const [dados, setDados] = useState({
        titulo: '',
        impacto: '',
        dataOcorrencia: '',
        atribuido: ''
    });
    
    async function enviar() {
        const url = 'http://localhost:5010/chamada';
        let resp = await axios.post(url, dados);
        console.log(resp);
    }

    return (
        <div className='pagina-consultar'>
            <Cabecalho />
            <h1> CONSULTAR </h1>
            <form>
                <label>Título</label>
                <input type='text' value={dados.titulo} onChange={e => setDados({...dados, titulo: e.target.value})}/>
                <label>Impacto</label>
                <input type='text' value={dados.impacto} onChange={e => setDados({...dados, impacto: e.target.value})}/>
                <label>Data ocorrência</label>
                <input type='date' value={dados.dataOcorrencia} onChange={e => setDados({...dados, dataOcorrencia: e.target.value})}/>
                <label>Atribuído</label>
                <input type='text' value={dados.atribuido} onChange={e => setDados({...dados, atribuido: e.target.value})}/>
            </form>
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}