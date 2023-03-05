import React from 'react';
import {useParams} from "react-router";
import PageNotFound from "../PageNotFound/PageNotFound";
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
                    if (e.id == productID) {
                        return (<div>
                            <div>
                                <img src={e.img} alt="image_product" width={'200px'}/>
                            </div>
                            <div>{e.title}</div>
                            <div>{e.description}</div>
                            <div>{e.price}</div>
                        </div>)
                    }
                })
            }
        </div>
    );
};

export default SingleProduct;