import { useState, useEffect } from 'react';

import { FormInclude } from './Components/Fromularios/FormInclude';
import { Menu } from './Components/Menu/Menu';
import './Components/Menu/Menu.css';
import './Components/Fromularios/CampoTexto.css';
import './Components/Fromularios/Form.css';

function Post() {
  const [produtos,setProdutos] =  useState([]);
  let count = 0;

    useEffect ( () => {
        fetch("http://localhost:3001/produtos", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }   
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProdutos(data);

        })
        .catch((err) => console.log(err)).catch((err) => console.log(err))
    }, [])
    produtos.map(produtos =>(count++))

  return (
    <section  >
      <div className="sidenav">
        <Menu/>
      </div>
      {/* <div className='main campo-texto Form' style={{flexFlow: 'column', alignItems: 'center'}} >
        <h1 style={{display: 'flex'}}>DashBoard</h1>
        <form style={{marginTop: 95}}>
          
          <h1>{count} Produtos</h1>
        </form>
      </div> */}
    </section>

  );
}


export default Post;
