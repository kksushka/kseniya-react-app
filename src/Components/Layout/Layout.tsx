import { useState, type PropsWithChildren } from "react";
import './Layout.css'
import Theme from "../Theme/Theme";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useTheme } from "../Theme/ThemeContext";

interface LayoutProps {
    title: string,
}

export function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
    const { theme, toggleTheme } = useTheme();

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div className="layout">
            <header className="header">
                <Theme theme={theme} onToggle={toggleTheme} />
                <BurgerMenu menuIsOpen={menuIsOpen} menuOnToggle={handleToggleMenu} />
            </header>
            <div className="layout__content">
                <div className="layout__top">
                    <button className="layout__btn">Back to home</button>
                    <h1 className="layout__title">{title}</h1>
                </div>
                <div className="layout__inner">{children}</div>

            </div>
        </div>
    )

}