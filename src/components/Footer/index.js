import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="links">
          <Link to="/menu" className="single-link">
            <div className="icon">
              <i className="fas fa-hamburger"></i>
            </div>
            <span>MENU</span>
          </Link>
          <Link to="/cart" className="single-link">
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <span>CART</span>
          </Link>
          <Link to="/cart" className="single-link">
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <span>CART</span>
          </Link>
          <Link to="/cart" className="single-link">
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <span>CART</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
