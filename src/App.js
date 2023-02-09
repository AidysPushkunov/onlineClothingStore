import { Routes, Route, Link } from 'react-router-dom';
import News from './Components/News/News';



import React, {useState} from 'react';
// import app from './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';

// import Burger from './Components/Burger/Burger';

// const serverPath = 'http://localhost:3001';


function App() {
    const [burgerActive, setBurgerActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);


    const items = [{id: 1, value: "Главная", href:  "/main"}, {id: 2, value: "Товары", href: "/products"}, {id: 3, value: "Новости", href: "/news"}, {id: 4, value: "О нас", href: "/about"}];

    return (
    <div>
        {/*<Burger active={menuActive} setActive={setMenuActive}/>*/}
        <Navigation active={menuActive} setActive={setMenuActive} burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
        <Header />
                            
        <Routes>
                        <Route path='/main' element={<App />} />
                        <Route path='/news' element={<News />} />
        </Routes>
    </div>
  );
}

export default App;
