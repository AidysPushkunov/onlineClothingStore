import product from './Product.module.css'
import { Link } from "react-router-dom";

const Product = (props) => {
    const productID = props.id;
    return (
        <div className={product.main}>
            <Link to={`/single/${productID}`} className={product.link_product}>
                <div className={product.image_border}>
                    <img src={props.img} alt="title"/>
                </div>
                <div className={product.title}>{props.title}</div>
                <div className={product.price}>{props.price} &#8381;</div>

                {/*<div className={product.description}>{props.description}</div>*/}
            </Link>
        </div>
    )
}

export default Product;