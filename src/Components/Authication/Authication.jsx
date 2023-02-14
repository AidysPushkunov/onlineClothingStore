import React from 'react';
import authication from './Authication.module.css';
import { Link } from 'react-router-dom';

const Authication = () => {

    let params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            let a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

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
                    {
                        (params['data'] === undefined) ? '' : ((params['data']) ? <div className={authication.success}>Пользователь успешно зарегистрирован.</div> : <div className={authication.error}>Произошла ошибка при добавлении пользователя.</div>)
                    }
                </form>
            </div>
        </div>
    );
};

export default Authication;