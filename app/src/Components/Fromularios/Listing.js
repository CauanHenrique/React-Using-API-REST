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
                    {produtos.id}
                    <br></br>
                    {produtos.nome}
                    <br></br>
                    {produtos.preco}
                </form>
            ))}            
        </section> 
    )
    

}