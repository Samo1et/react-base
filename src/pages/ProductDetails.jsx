import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Product from '../components/Product';
import useQuery from '../hooks/useQuery';
import {get, set as lodashSetter} from 'lodash'

function ProductDetails() {
    const {id} = useParams();
    console.log(useParams())
    const navigate = useNavigate()
    const [product, someParam] = useQuery('https://fakestoreapi.com/products/' + id)
    //console.log(someParam('state data'))
    //const [product, params] = [requestData]

    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    
    console.log(lodashSetter(object, 'a[0].c.log', {}))
    console.log(get(object, 'a[0].e.log', []))

    return (
        <div>
            <div onClick={() => navigate(-1)}>Back</div>

            
            {product ? <Product isShowLink={false} {...product}/> : <div>Loding</div>}
        </div>
    )
}

export default ProductDetails
