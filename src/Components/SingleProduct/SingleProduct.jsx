import React from 'react';
import {useParams} from "react-router";
// import axios from "axios";
// import {response} from "express";

const SingleProduct = () => {

    // const [product, setProduct] = useState([]);
    const params = useParams();
    const productID = params.id;


    return (
        <div>
            ID вашего продукта: {productID} <br/>
            Название продукта:
        </div>
    );
};

export default SingleProduct;