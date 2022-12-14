import { useState, useEffect } from 'react';

import { Menu } from './Components/Menu/Menu';
import './Components/Menu/Menu.css';
import './Components/Fromularios/CampoTexto.css';
import './Components/Fromularios/Form.css';

function Post() {
  return (
    <section  >
      <div className='dashboard campo-texto Form' >
        <Menu id="Menu"/> 
      </div>
    </section>

  );
}


export default Post;
