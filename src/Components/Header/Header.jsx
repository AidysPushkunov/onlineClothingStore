import header from './Header.module.css';
import Product from "../Product/Product";
import ShowProduct from "../showProduct/ShowProduct";


const Header = () => {
    return (
        <div className={header.main}>
            <ShowProduct />
            <div className={header.products}>
                <Product img={'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg'} title={'Title'} description={'Description'}/>
            </div>
        </div>
    )
}

export default Header;