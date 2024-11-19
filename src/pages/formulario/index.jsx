import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/cabecalho';
import axios from 'axios'

export default async function Formulario() {
    const[titulo, setTitulo] = useState('');
    const[informacoes, setInformacoes] = useState('');
    const[impacto, setImpacto] = useState('');
    const[dataOcorrencia, setDataOcorrencia] = useState('');
    const[atribuido, setAtribuido] = useState('');
    
    async function enviar() {
        const url = `http://localhost:3000/chamada`;
        try {
            let dados = {
                titulo  : titulo,
                informacoes: informacoes,
                impacto: impacto,
                dataOcorrencia: dataOcorrencia,
                atribuido: atribuido,
                
            };
            await axios.post(url, dados);
        }
        catch(err) {
            console.log(err);
        }
    }


    return (
        <div className='pagina-consultar'>
            <Cabecalho />
            <h1> CONSULTAR </h1>
            <form>
                <label>Título</label>
                <input type='text' value={titulo} onChange={e => setTitulo(e.target.value)}/>
                <label>Informações</label>
                <input type='text' value={informacoes} onChange={e => setInformacoes(e.target.value)}/>
                <label>Impacto</label>
                <input type='text' value={impacto} onChange={e => setImpacto(e.target.value)}/>
                <label>Data ocorrência</label>
                <input type='date' value={dataOcorrencia} onChange={e => setDataOcorrencia(e.target.value)}/>
                <label>Atribuído</label>
                <input type='text' value={atribuido} onChange={e => setAtribuido(e.target.value)}/>
            </form>
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}