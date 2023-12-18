import "./Header/Header.scss";
import { Link } from "react-router-dom";

const Navbar = ({ active, closeNav }) => {
  return (
    <ul className="navbar" style={{ top: active }}>
      <div className="closebtn" onClick={() => closeNav()}>
        &times;
      </div>
      <Link className="link" to="/therapists">
        Find a therapists
      </Link>
      <Link className="link" to="/">
        Get Help
      </Link>
      <Link className="link" to="/">
        Magazine
      </Link>
      <Link className="link" to="/">
        Today
      </Link>
    </ul>
  );
};

export default Navbar;
