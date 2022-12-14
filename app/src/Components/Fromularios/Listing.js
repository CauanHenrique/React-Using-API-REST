import {useEffect, useState} from 'react'

import '../Fromularios/Form.css'

export const Listing = () => {
    const [produtos,setProdutos] =  useState([])

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
    

    return (
        <section className='Form' >
            {produtos.map(produtos => (
                <form>
                    <h3>Id:</h3> 
                    {produtos.id}
                    <br></br>
                    <h3>Nome:</h3> 
                    {produtos.nome}
                    <br></br>
                    <h3>Preço:</h3> 
                    {produtos.preco}
                </form>
            ))}            
        </section> 
    )
    

}