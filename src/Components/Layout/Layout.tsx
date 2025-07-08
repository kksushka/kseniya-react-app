import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import Theme from '../Theme/Theme';
import { useTheme } from '../Theme/ThemeContext';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState, type PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path ? 'navLink active' : 'navLink';

    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/posts" className={isActive('/posts')}>Posts</Link>
                    <Link to="/search" className={isActive('/search')}>Search</Link>
                    <Link to="/sign-in" className={isActive('/sign-in')}>Sign In</Link>
                    <Link to="/register" className={isActive('/register')}>Sign Up</Link>
                </nav>

                <div className="header__controls">
                    <Theme theme={theme} onToggle={toggleTheme} />
                    <BurgerMenu menuIsOpen={menuIsOpen}
                        menuOnToggle={handleToggleMenu} />
                </div>
            </header>

            <main className="layout__content">
                {children}
            </main>

        </div>
    );
}