import "./Header.scss";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Header = ({ active, openNav, closeNav }) => {
  return (
    <header>
      <div className="menubtn" onClick={() => openNav()}>
        &#9776;
      </div>
      <Logo />
      <Navbar active={active} closeNav={closeNav} />
      <button className="btn btn-primary">Log In</button>
    </header>
  );
};

export default Header;
