import burger from './Burger.module.css';

const Burger = (props) => {
    // console.log( "Вот твои пропсы: ", props.setActive)
    // console.log( "Вот твои пропсы: ", props.active)


    // console.log( "Вот твои пропсы: ", props.setBurgerActive)
    // console.log( "Вот твои пропсы: ", props.burgerActive)
    // console.log(  "Вот твои пропсы: ", props.setBurgerActive(!props.burgerActive))


    return (
        <div className={burger.burger} onClick={() => {props.setActive(!props.active); props.setBurgerActive(!props.burgerActive)}} >
            <div className={ props.burgerActive ? burger.top1 : burger.top }></div>
            <div className={ props.burgerActive ? burger.middle1 : burger.middle }></div>
            <div className={ props.burgerActive ? burger.bottom1  : burger.bottom }></div>
        </div>
    );
}

export default Burger;