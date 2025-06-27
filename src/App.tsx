import './App.css'
import Title from './Components/Title/Title';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import { useState } from 'react';

function App() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <>
            <header className='header__container'>
                <BurgerMenu menuIsOpen={menuIsOpen} menuOnToggle={handleToggleMenu} />
            </header>

            <div className='main'>
                <Title title='Sign In' />
            </div>
        </>
    )
}

export default App;
