import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Post } from '../../../src/index';
import { PagAlter } from '../../Pages/Alter';
import { PagInclude } from '../../Pages/Include';
import { PagList } from '../../Pages/Listing';
import { FormDelete } from '../../Pages/PagDelete';
import './Menu.css';

export const Menu = () => {

    return (
        <div className="content" style={{}}>
        <Router >
            <section id='nav' >
                <div>
                    <Link className='li' to='/'>Home</Link>
                </div>
                <div>
                    <Link className='li' to='/Include'>Incluir</Link>
                </div>
                <div>
                    <Link to='/Alter' className='li' style={{textDecoration: 'none'}}>Alterar</Link>
                </div>
                <div>
                    <Link className='li' to='/List'>Listar</Link>
                </div>
                <div>
                    <Link className='li' to='/Delete'>Deletar</Link>
                </div>
            </section>
            <Routes>
                <Route path="/Include" element={<PagInclude />} />
                <Route path='/Alter' element={<PagAlter />} />
                <Route path='/List' element={<PagList />} />
                <Route path='/Delete' element={<FormDelete />} />
            </Routes>
        </Router>
        </div>
    )
}
