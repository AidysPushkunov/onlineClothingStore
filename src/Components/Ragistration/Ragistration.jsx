import React from 'react';
import register from './Ragistration.module.css';
import { Link } from 'react-router-dom';

const Ragistration = () => {
    return (
        <div className={register.content}>
            <div className={register.title}>
                Регистрация
            </div>
            <div className={register.form}>
                <form method={'POST'} action="http://localhost:3001/registration">
                        <input type="text" placeholder={'фамилия и имя'} name={'full_name'}required/> <br/>
                        <input type="email" placeholder={'почта'} name={'email'} required /><br/>
                        <input type="password" placeholder={'пароль'} name={'password'} required /><br/>
                        <input type="password" placeholder={'повторите пароль'} name={'password_repeat'} required /><br/>
                        <div className={register.button}>
                            <input type={"submit"} value={'зарегистрироваться'}/>
                        </div>
                    <Link to={'/authication'} className={register.link}>У вас уже есть аккаунт</Link>
                </form>
            </div>
        </div>
    );
};

export default Ragistration;