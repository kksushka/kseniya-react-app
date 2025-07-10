
type ThemeProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

const Theme = ({ theme, onToggle }: ThemeProps) => {
  return (
    <button className="mode__btn" onClick={onToggle}>
      {theme === 'light' ? 'Mode: Dark' : 'Mode: Light'}
    </button>
  );
};

export default Theme;
