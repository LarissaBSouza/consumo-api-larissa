import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ProdutoItem from '../../components/ProdutoItem';

function Produto(props) {

    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get('${baseAPI}/produtos/${id}')
        .then((response) => {
            setProduto(response.data)
        })
    }, [])

    return (
        <ProdutoItem produto={produto} />
    )
}

export default Produto