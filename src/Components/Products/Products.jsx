import React from 'react';
import Product from "../Product/Product";
import style_product from './Products.module.css';
import header from "../Header/Header.module.css";

const Products = (props) => {
    return (
        <>
            <div className={header.products_back_color}>
                <div className={header.products_back}>
                    <div className={header.products}>
                        {props.products.map(e => {
                            return (
                                <Product key={e.id} id={e.id} img={e.img} title={e.title} description={e.description} price={e.price}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;