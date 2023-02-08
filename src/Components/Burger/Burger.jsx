import burger from './Burger.module.css';

const Burger = (props) => {
    return (
        <div className={burger.burger} onClick={() => {props.setActive(!props.active); props.setBurgerActive(!props.burgerActive)}} >
            <div className={ props.burgerActive ? burger.top : burger.top1 }></div>
            <div className={ props.burgerActive ? burger.middle : burger.middle1 }></div>
            <div className={ props.burgerActive ? burger.bottom  : burger.bottom1 }></div>
        </div>
    );
}

export default Burger;