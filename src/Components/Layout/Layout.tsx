import { useState, type PropsWithChildren } from "react";
import './Layout.css';
import Theme from "../Theme/Theme";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store";

interface LayoutProps {
    title: string;
}

export function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
    const theme = useSelector((state: RootState) => state.theme.mode); 
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const navigate = useNavigate();

    return (
        <div className={`layout ${theme}`}> 
            <header className="header">
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li><Link to="/posts" className="nav__link">Posts</Link></li>
                        <li><Link to="/createpost" className="nav__link">Create</Link></li>
                    </ul>
                </nav>
                <div className="header__controls">
                    <Theme /> 
                    <BurgerMenu menuIsOpen={menuIsOpen} menuOnToggle={handleToggleMenu} />
                </div>
            </header>

            <div className="layout__content">
                <div className="layout__top">
                    <button className="layout__btn" onClick={() => navigate('/')}>
                        Back to home
                    </button>
                    <h1 className="layout__title">{title}</h1>
                </div>
                <div className="layout__inner">{children}</div>
            </div>
        </div>
    );
}

export default Layout;