import s from "./Header.module.css";
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png" />
        
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : 
            <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
        
        </header>
    );
};

export default Header;
