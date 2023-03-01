import React, {useContext, useState} from 'react';
import authentication from './Authentication.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/authContext.js";


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



    // ###########################################


    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const [err, setError] = useState(null);


    const {login} = useContext(AuthContext);

    const navigate = useNavigate();


    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await login(inputs)
            // await axios.post("/auth/login", inputs);
            navigate("/");
        } catch(err) {
            setError(err.response.data)
        }

    }

    return (
        <div className={authentication.content}>
            <div className={authentication.title}>
                Войдите в свой аккаунт
            </div>
            <div className={authentication.form}>
                <form  method={"POST"} action="http://localhost:3001/api/auth/signin">
                {/*<form>*/}
                    <input type="email" placeholder={'почта'} name={'email'} required onChange={handleChange}/><br/>
                    <input type="password" placeholder={'пароль'} name={'password'} required onChange={handleChange} /><br/>
                    <div className={authentication.button}>
                        <input type={"submit"} value={'войти'} onClick={handleSubmit} />
                    </div>

                    <Link to={'/registration'} className={authentication.link}>Нету аккаунта, зрегистрируйтесь</Link>
                    {
                        (params['data'] === undefined) ? '' : <div className={authentication.notification}>{params['data']}</div>

                    }
                    {/*{err ? <p>{err}</p> : ''}*/}
                </form>
            </div>
        </div>
    );
};

export default Authentication;