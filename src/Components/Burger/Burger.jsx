import burger from './Burger.module.css';

const Burger = (props) => {
    return (
        <div className={burger.burger} onClick={() => props.setActive(!props.active)} >
            <div className={burger.top}></div>
            <div className={burger.middle}></div>
            <div className={burger.middle}></div>
        </div>
    );
}

export default Burger;