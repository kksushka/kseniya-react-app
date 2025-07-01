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
        </div>
    );
}

export default BurgerMenu;