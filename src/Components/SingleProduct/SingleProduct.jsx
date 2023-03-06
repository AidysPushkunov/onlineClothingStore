import React from 'react';
import {useParams, useNavigate, Navigate} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";
import single_style from './SingleProject.module.css';


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
                        return (<div className={single_style.container}>
                            <div key={e.id} className={single_style.main}>
                                <div className={single_style.img}>
                                    <img src={e.img} alt="image_product"/>
                                </div>
                                <div className={single_style.info}>
                                    <div className={single_style.title}>{e.title}</div>
                                    <div className={single_style.description}>{e.description}</div>
                                    <div className={single_style.price_buttons}>
                                        <div className={single_style.price}>{e.price} &#8381;</div>
                                        <button className={single_style.button_add}>Добавить в корзину</button>
                                    </div>

                                </div>
                            </div>
                            </div>)
                    }
                })
            }
        </div>
    );
};

export default SingleProduct;