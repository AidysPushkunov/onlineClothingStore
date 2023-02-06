import product from './Product.module.css'

const Product = (props) => {
    return (
        <div className={product.main}>
            <div className={product.image_border}>
                <img src={props.img} alt="title"/>
            </div>
            <div className={product.title}>{props.title}</div>
            <div className={product.description}>{props.description}</div>
        </div>
    )
}

export default Product;