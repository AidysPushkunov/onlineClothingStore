import {useEffect, useState} from "react";
import header from './Header.module.css';
import Product from "../Product/Product";
import ShowProduct from "../showProduct/ShowProduct";
import axios from "axios";


const Header = (props) => {



    return (
        <div className={header.header_main}>
            <ShowProduct />
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

        </div>
    )
}

export default Header;