import product from './Product.module.css'

const Product = (props) => {
    return (
        <div className={product.main}>
            <div className={product.image_border}>
                <img src={props.img} alt="title"/>
            </div>
            <div className={product.title}>{props.title}</div>
            <div className={product.price}>{props.price} &#8381;</div>

            {/*<div className={product.description}>{props.description}</div>*/}
        </div>
    )
}

export default Product;