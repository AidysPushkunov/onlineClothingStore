import React from 'react';
import register from './Ragistration.module.css';
import { Link } from 'react-router-dom';

const Ragistration = () => {

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
    console.log(params['data']);

    return (
        <div className={register.content}>
            <div className={register.title}>
                Регистрация
            </div>
            <div className={register.form}>
                <form method={'POST'} action="http://localhost:3001/api/auth/signup">
                        <input type="text" placeholder={'фамилия и имя'} name={'username'} required/> <br/>
                        <input type="email" placeholder={'почта'} name={'email'} required /><br/>
                        <input type="password" placeholder={'пароль'} name={'password'} required /><br/>
                        <input type="password" placeholder={'повторите пароль'} name={'repeat'} required /><br/>
                        <div className={register.button}>
                            <input type={"submit"} value={'зарегистрироваться'}/>
                        </div>
                    <Link to={'/authication'} className={register.link}>У вас уже есть аккаунт</Link>

                    {
                        (params['data'] === undefined) ? '' : ((params['data']) ? <div className={register.error}>{params['data']}</div> : <div className={register.success}>Произошла ошибка при добавлении пользователя.</div>)
                    }
                </form>
            </div>
        </div>
    );
};

export default Ragistration;