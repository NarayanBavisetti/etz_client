import "./navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="menuHamburger">
          <div className="lines">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        <div className="logo">
          <a href="..">
            <img src={Logo} alt="ETZ Logo" />
          </a>
        </div>
        <div className="links">
          <a href=".." className="singleLink">
            Home
          </a>
          <a href="#" className="singleLink">
            About Us
          </a>
          <a href="#" className="singleLink">
            Contact Us
          </a>
          <button type="button" className="ctaBtn">
            Get Quotation
          </button>
        </div>
        <div className="closeBtn">
          <i className="fas fa-times"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
