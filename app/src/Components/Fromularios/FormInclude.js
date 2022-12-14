import {useEffect, useState} from 'react'

import './CampoTexto.css'
import './Form.css';

export const FormInclude = () => {

    const [categorias,setCategorias] =  useState([])

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

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria_id, setCategorias_id] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit =  async (e) =>{
        e.preventDefault();
        try{
            let res = await fetch("http://localhost:3001/produtos/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    categoria_id: categoria_id
                }),
                
            });
            let resJson = await res.json();
                
                if (res.status === 201) {
                  setNome("");
                  setDescricao("");
                  setPreco("");
                  setCategorias_id(0)
                  setMessage("Produto cadastrado com sucesso!!");
                } else {
                  setMessage("Ocorreu algum erro.");
                }
        } catch (err) {
                console.log(err);
            }
    }

    return (
        <section className="Form dashboard">
            <h1>Incluir</h1>
            <form onSubmit={handleSubmit} className="campo-texto" style={{marginTop: 60}}>

                <h2>Preencha os dados para inserir um produto</h2>
                <label>Nome</label>
                <input
                    className='campo-texto'
                    name='nome'
                    type="text"
                    placeholder="nome do produto " 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    
                    
                    />
                <label>Descrição</label>
                <input 
                    className='campo-texto'
                    name='descricao'
                    type="text"
                    placeholder="descritivo do produto " 
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    />
                <label>Preço</label>    
                <input 
                    className='campo-texto'
                    name='valor'
                    type="number"
                    placeholder="valor do produto " 
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    />

                <select name="categoria_id" className="campo-texto" onChange={(e) => setCategorias_id(e.target.value)} >
                    <option key={0}>Selecione a categoria.</option>
                    {categorias.map((categorias) =>(
                        <option 
                            value={parseInt(categorias.id)} 
                            key={categorias.id}
                            >
                            {categorias.nome}
                        </option>
                    ))}
                </select>

                <br></br>
                <div>
                    <button type="submit">Enviar</button>
                </div>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form> 

        </section>
    )
}