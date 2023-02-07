import React from 'react';
import './Menu.css';

const Menu = ({  items, active, setActive }) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <ul>
                    {items.map(item =>
                        <li key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;