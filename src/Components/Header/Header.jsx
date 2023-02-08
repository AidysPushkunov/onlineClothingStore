import header from './Header.module.css';
import Product from "../Product/Product";
import ShowProduct from "../showProduct/ShowProduct";


const Header = () => {
    return (
        <div className={header.header_main}>
            <ShowProduct />
            <div className={header.products}>
                <Product img={'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg'} title={'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ'} description={'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'}/>
                <Product img={'https://basket-03.wb.ru/vol381/part38159/38159052/images/big/1.jpg'} title={'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ'} description={'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'}/>
                <Product img={'https://sport-active.by/wp-content/uploads/2021/03/20191016155149_nike_sportswear_club_bv2666_010_black-380x600.jpeg'} title={'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ'} description={'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'}/>
                <Product img={'https://static.baza.farpost.ru/v/1548400928018_bulletin'} title={'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ'} description={'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'}/>
            </div>
        </div>
    )
}

export default Header;