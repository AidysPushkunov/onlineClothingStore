import React from 'react';

import App from '../../App';
import './Menu.css';



import { Routes, Route, Link } from 'react-router-dom';
 

const Menu = ({  items, active, setActive }) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <ul>
                    {
                    items.map(item =>
                        <li key={item.id}>
                            <Link to={item.href}>{item.value}</Link>
                        </li>
                        
                    )
                    }
                
                </ul>

            </div>
        </div>
    );
};

export default Menu;