import burger from './Burger.module.css';

const Burger = () => {
    return (
        <div className={burger.burger}>
            <div className={burger.top}></div>
            <div className={burger.middle}></div>
            <div className={burger.middle}></div>
        </div>
    );
}

export default Burger;