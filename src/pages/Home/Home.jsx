/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseAPI } from '../../services/environments';
import ListaProdutos from '../../components/ListaProdutos';

function Home() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get(`${baseAPI}/produtos`).then((response)=> {
            setProdutos(response.data)
        })
        .catch((err) => {
            console.error("Ops! Ocorreu um erro!" + err.message)
        })
    }, [])

    return (
        <>
            <h1>Home</h1>
            <ListaProdutos produtos={produtos} />
        </>
    )
}

export default Home