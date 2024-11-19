import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Formulario from './pages/formulario';
import Tabela from './pages/tabela';    
export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tabela />} />                
                <Route path='/formulario' element={<Formulario />} />
                
         

                
            </Routes>
        </BrowserRouter>
    );
}
