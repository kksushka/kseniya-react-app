import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Store';
import { toggleTheme } from '../../Slices/themeSlice';
import { useEffect } from 'react';

const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
      dispatch(toggleTheme());
    }
  }, []);

  return (
    <button className="mode__btn" onClick={() => dispatch(toggleTheme())}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default Theme;