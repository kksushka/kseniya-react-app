
import { Link } from 'react-router-dom'; 

interface BurgerMenuProps {
    menuIsOpen: boolean;
    menuOnToggle: () => void;
}

function BurgerMenu({ menuIsOpen, menuOnToggle }: BurgerMenuProps) {
    return (
        <div className="menu__container">
            <button className="menu__button" onClick={menuOnToggle}>
                <div className={menuIsOpen ? "icon active" : "icon inactive"}></div>
            </button>
            
            {menuIsOpen && (
                <div className="menu__dropdown">
                    <Link to="/signin" className="menu__link" onClick={menuOnToggle}>
                        Sign In
                    </Link>
                    <Link to="/signup" className="menu__link" onClick={menuOnToggle}>
                        Sign Up
                    </Link>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;