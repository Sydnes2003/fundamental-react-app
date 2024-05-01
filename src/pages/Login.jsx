import React, {useContext} from 'react';
import DefaultInput from "../components/UI/input/DefaultInput";
import DefaultButton from "../components/UI/button/DefaultButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    };

    return (
        <div>
            <h1>Войдите в аккаунт</h1>
            <form onSubmit={login} >
                <DefaultInput type='text' placeholder='Введите логин'/>
                <DefaultInput type='password' placeholder='Введите пароль'/>
                <DefaultButton>Войти</DefaultButton>
            </form>
        </div>
    );
};

export default Login;