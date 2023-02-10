import React from 'react';
import authication from './Authication.module.css';
import { Link } from 'react-router-dom';

const Authication = () => {
    return (
        <div className={authication.content}>
            <div className={authication.title}>
                Войдите в свой аккаунт
            </div>
            <div className={authication.form}>
                <form action="http://localhost:3001">
                    <input type="email" placeholder={'почта'} name={'email'} required /><br/>
                    <input type="password" placeholder={'пароль'} name={'password'} required /><br/>
                    <div className={authication.button}>
                        <input type={"submit"} value={'войти'}/>
                    </div>
                    <Link to={'/registration'} className={authication.link}>Нету аккаунта, зрегистрируйтесь</Link>
                </form>
            </div>
        </div>
    );
};

export default Authication;