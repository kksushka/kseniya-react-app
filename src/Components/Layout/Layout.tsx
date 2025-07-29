import { useEffect, useState } from "react";
import './Layout.css';
import Theme from "../Theme/Theme";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector, type RootState } from "../../Store";
import UserDropDown from "../UserDropDown";
import { fetchProfile } from "../../Slices/ProfileThunk";
import { selectIsAuth } from "../../Slices/ProfileSlice";

export function Layout() {
    const theme = useSelector((state: RootState) => state.theme.mode);

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const isAuth = useAppSelector(selectIsAuth);
    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            dispatch(fetchProfile())
        }
    }, [isAuth])

    return (
        <div className={`layout ${theme}`}>
            <header className="header">
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li><Link to="/posts" className="nav__link">Posts</Link></li>
                        <li><Link to="/favorites" className="nav__link">Favorites</Link></li>
                        <li><Link to="/createpost" className="nav__link">Create</Link></li>

                        <li><Link to='/create-user' className="nav__link">Create user with jsonplaceholder</Link></li>
                    </ul>
                </nav>

                <div className="header__controls"> {isAuth ?
                    (<>
                        <UserDropDown />
                    </>)
                    :
                    (<>
                        <Theme />
                        <BurgerMenu menuIsOpen={menuIsOpen} menuOnToggle={handleToggleMenu} />
                    </>
                    )}


                </div>
            </header>

            <div className="layout__content">
                <div className="layout__top">
                    <button className="layout__btn" onClick={() => navigate('/')}>
                        Back to home
                    </button>
                </div>
                <div className="layout__inner">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Layout;

