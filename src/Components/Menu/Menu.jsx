import React from 'react';

import App from '../../App';
import './Menu.css';



import { Link } from 'react-router-dom';
 

const Menu = ({  items, active, setActive, burgerActive, setBurgerActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur" onClick={ () => {setActive(!active); setBurgerActive(!burgerActive) } } ></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <ul>
                    {
                    items.map(item =>
                        <li key={item.id} >
                            <Link to={item.href} onClick={ () => {setActive(!active); setBurgerActive(!burgerActive) } }>{item.value}</Link>
                        </li>
                        
                    )
                    }
                
                </ul>

            </div>
        </div>
    );
};

export default Menu;