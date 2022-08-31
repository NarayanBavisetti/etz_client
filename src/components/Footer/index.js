import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="links">
          <div className="single-link">
            <Link to="/speakers">SPEAKERS</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
