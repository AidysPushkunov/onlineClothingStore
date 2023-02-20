import React from 'react';
import authentication from './Authentication.module.css';
import { Link } from 'react-router-dom';


const Authentication = () => {

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
        <div className={authentication.content}>
            <div className={authentication.title}>
                Войдите в свой аккаунт
            </div>
            <div className={authentication.form}>
                <form method={"POST"} action="http://localhost:3001/api/auth/signin">
                    <input type="email" placeholder={'почта'} name={'email'} required /><br/>
                    <input type="password" placeholder={'пароль'} name={'password'} required /><br/>
                    <div className={authentication.button}>
                        <input type={"submit"} value={'войти'}/>
                    </div>

                    <Link to={'/registration'} className={authentication.link}>Нету аккаунта, зрегистрируйтесь</Link>
                    {
                        (params['data'] === undefined) ? '' : <div className={authentication.notification}>{params['data']}</div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Authentication;