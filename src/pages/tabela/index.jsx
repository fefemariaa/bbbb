import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/cabecalho';
import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Tabela() {
    const [tabela, setTabela] = useState([]);


    async function buscar() {
        const url = 'http://localhost:3000/chamada';
        let resp = await axios.get(url);
        setTabela(resp.data);
    }
    async function excluir(index) {
        const url = `http://localhost:3000/chamada/${index}`;
        let resp = await axios.delete(url);
        setTabela(resp.data);

    }

    

    return (
        <div className='pagina-consultar'>
            <Cabecalho />
            <a href="/formulario">Formulario</a>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>Título</th>

                        <th>Informações</th>
                        <th>Impacto</th>
                        <th>Data ocorrência</th>
                        <th>Atribuído</th>
                    </tr>
                </thead>

                <tbody>
                    {tabela.map((item, index) =>
                        <tr key={index}>
                            <td>{item.titulo}</td>
                            <td>{item.informacoes}</td>
                            <td>{item.impacto}</td>
                            <td>{new Date(item.dataOcorrencia).toLocaleDateString()}</td>
                            <td>{item.atribuido ? 'Sim' : 'Não'}</td>
                            <td><button onClick={() => excluir(index)}>excluir</button></td>
                        </tr>
                    )}
                </tbody>

            </table>
            <button><a href="/formulario">Nova chamada</a></button>

           
        </div>
    )
}