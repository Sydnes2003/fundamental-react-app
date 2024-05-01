import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="Navbar">
            {isAuth
                ?
                <div className="navbar__links">
                    <button className="navbar__link" onClick={logout}>Выйти</button>
                    <Link className="navbar__link" to='/about'>О сайте</Link>
                    <Link className="navbar__link" to='/posts'>Посты</Link>
                </div>
                :
                <div className="navbar__links">
                    <Link className="navbar__link" to='/login'>Логин</Link>
                </div>
            }
        </div>
    );
};

export default Navbar;