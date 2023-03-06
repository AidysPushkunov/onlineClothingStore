import React from 'react';
import {useParams, useNavigate, Navigate} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";


const SingleProduct = (props) => {

    const params = useParams();
    const productID = params.id;

    const navigate = useNavigate();


    const { currentUser } = useContext(AuthContext);

    const userFalse = () => {
            return <Navigate to={'/authentication'} > </Navigate>
            // navigate("/authentication");
            // window.location.reload();
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