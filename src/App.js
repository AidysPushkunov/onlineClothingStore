import React, {useState} from 'react';
// import app from './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';

import Burger from './Components/Burger/Burger';

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    const items = [{id: 1, value: "Главная", href: "/main"}, {id: 2, value: "Товары", href: "/products"}, {id: 3, value: "Новости", href: "/news"}, {id: 4, value: "О нас", href: "/about"}];

    return (
    <div>
        {/*<Burger active={menuActive} setActive={setMenuActive}/>*/}
        <Navigation active={menuActive} setActive={setMenuActive}/>
        <Header />

        <Menu active={menuActive} setActive={setMenuActive} items={items} burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </div>
  );
}

export default App;
