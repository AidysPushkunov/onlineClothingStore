import React from 'react';
import {useParams} from "react-router";
// import axios from "axios";
// import {response} from "express";

const SingleProduct = (props) => {

    // const [product, setProduct] = useState([]);
    const params = useParams();
    const productID = params.id;




    return (
        <div>
            {
                props.products.map(e => {
                    if (e.id === productID) {
                        return (<div>Эл Алтай</div>)
                    } else {
                        return (<div>Бӱгӱн кӧрӧрис</div>)
                    }
                })
            }
            ID вашего продукта: {productID} <br/>
            Название продукта:
        </div>
    );
};

export default SingleProduct;