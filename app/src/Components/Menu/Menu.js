import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Post } from '../../../src/index';
import { PagAlter } from '../../Pages/Alter';
import { PagInclude } from '../../Pages/Include';
import { PagList } from '../../Pages/Listing';
import './Menu.css';

export const Menu = () => {


    return (
        <Router className='sidenav'>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <a href='http://localhost:3000/Include'>Incluir</a>
            </div>
            <div>
                <Link to='/Alter'>Alterar</Link>
            </div>
            <div>
                <Link to='/List'>Listar</Link>
            </div>
            <Routes>
                {/* <Route exact path="/" element={<Post />} />; */}
                <Route path="/Include" element={<PagInclude />} />
                <Route path='/Alter' element={<PagAlter />} />
                <Route path='/List' element={<PagList />} />
            </Routes>
        </Router>
        
    )
}
