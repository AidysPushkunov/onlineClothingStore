import React from 'react';
import {useParams, useNavigate,  useLocation} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";
// import {RedirectFunction} from "react-router-dom";

import PageNotFound from "../PageNotFound/PageNotFound";
// import axios from "axios";
// import {response} from "express";

const SingleProduct = (props) => {

    // const [product, setProduct] = useState([]);
    const params = useParams();
    const productID = params.id;

    const navigate = useNavigate();

    const location = useLocation();



    const { currentUser } = useContext(AuthContext);

    const userFalse = () => {
            navigate("/authentication");
            window.location.reload()
    }

    return (
        <div>
            {
                !currentUser ? userFalse() : props.products.map(e => {
                    if (e.id == productID) {
                        return (<div key={e.id}>
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