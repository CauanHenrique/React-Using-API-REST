import {useEffect, useState} from 'react'

import '../Components/Fromularios/CampoTexto.css'
import '../Components/Fromularios/Form.css';

export const FormDelete = () => {

    const [categorias,setCategorias] =  useState([])
    const [message, setMessage] = useState("");


    useEffect ( () => {
        fetch("http://localhost:3001/categorias", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        .then((resp) => resp.json())
        .then((datas) => {
            setCategorias(datas)
        })
        .catch((err) => console.log(err)).catch((err) => console.log(err))
    }, [])

    const [id, setid] = useState("");

    let handleSubmit =  async (e) =>{
        e.preventDefault();
        let data = JSON.stringify({
            id: id
        });
        try{
            let res = await fetch(`http://localhost:3001/produtos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });
            let resJson = await res.json();
                
                if (res.status === 200) {
                  setid("");
                  setMessage("Produto removido com sucesso!!");
                } else {
                  setMessage("Ocorreu algum erro.");
                }
        } catch (err) {
                console.log(err);
            }
    }

    return (
        <section className="main dashboard campo-texto Form">
            <h1>Deletar</h1>
            <form onSubmit={handleSubmit} className="campo-texto" style={{marginTop: 60}}>

                <h2>Preencha a id para deletar um produto</h2>
                <label>Id</label>
                <input 
                    className='campo-texto'
                    name='id'
                    type="number" 
                    placeholder="código do produto "
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                    />
                <div className="buttoon">
                    <button type="submit">Enviar</button>
                </div>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form> 

        </section>
    )
}