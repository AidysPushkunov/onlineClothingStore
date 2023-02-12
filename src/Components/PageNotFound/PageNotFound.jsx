import React from 'react';
import { Link } from "react-router-dom";
import page_not_styles from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={page_not_styles.content}>
            <img src="./uploads/images//sprites/404.png" alt="Page not found" className={page_not_styles.image}/>
            <div className={page_not_styles.text}>
                <h2>Страница не была найдена</h2>
                <Link to="/">Вернуться на главную страницу</Link>
            </div>
        </div>
    );
};

export default PageNotFound;