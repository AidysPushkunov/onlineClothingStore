import style from './Navigation.module.css';
import Burger from "../Burger/Burger";

const Navigation = (props) => {


    // console.log( "Вот твои пропсы: ", props.setBurgerActive)
    // console.log( "Вот твои пропсы: ", props.burgerActive)
    // console.log(  "Вот твои пропсы: ", props.setBurgerActive(!props.burgerActive))

    return (
        <div className={style.navigation}>
            <div className={style.content}>
                <div className={style.logo}>
                    <img src="./uploads/images/sprites/logo.png" alt="logo"/>
                </div>
                <div className={style.text}>
                    <div className={style.text_nav}>
                        {/*<ul>*/}
                        {/*    <li><a href="frontend/src/Components">Главная</a></li>*/}
                        {/*    <li><a href="frontend/src/Components">Товары</a></li>*/}
                        {/*    <li><a href="frontend/src/Components">Новости</a></li>*/}
                        {/*    <li><a href="frontend/src/Components">О нас</a></li>*/}
                        {/*</ul>*/}
                        <div className={style.search}>
                            <input type="text" placeholder={'Поиск...'} />
                            <img src="./uploads/images/sprites/search.png" alt="search"/>
                        </div>
                        <div className={style.user_account}>
                            <img src="./uploads/images/sprites/user_accaunt.png" alt="user_accaunt"/>
                        </div>
                        <div className={style.basket}>
                            <img src="./uploads/images/sprites/basket.png" alt="basket"/>
                        </div>
                        <Burger active={props.active} setActive={props.setActive} burgerActive={props.burgerActive} setBurgerActive={props.setBurgerActive}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;