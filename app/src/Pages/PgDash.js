import { useState, useEffect } from 'react';

import '../Components/Menu/Menu.css';
// import './Components/Fromularios/CampoTexto.css';
// import './Components/Fromularios/Form.css';

function PagDash() {
  const [produtos,setProdutos] =  useState([]);
  let counts = 0;
  let countcat1 = 0;
  let countcat2 = 0;

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
    produtos.map(produtos =>{
      counts++;
      parseInt(produtos.categoria_id) ===1 ?   countcat1++ : countcat2++
    })

  return (
    <section  >
        <div className='dashboard campo-texto Form' >
            <h1>DashBoard</h1>
            <form style={{marginTop: 95}}>
              <h1>{countcat1} Hambúrgeres</h1>
              <h1>{countcat2} Refrigerantes</h1>
              <h1>Total: {counts} produtos</h1>
            </form>
        </div>
    </section>

  );
}


export default PagDash;
