import logos from './Logos.png';

const Logo = (props) => (
  <img
    alt="Logo"
    src={logos}
    width="72"
    height="51"
    {...props}
  />
);

export default Logo;
