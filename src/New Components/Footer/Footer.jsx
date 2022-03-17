import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray">
      <footer>
        <div className="footer-box box-1">
          <div className="footer-logo">
            <Link className=" book-store" to="/">
              Book Store
            </Link>
          </div>
          <div className="sub-content-box-icons">
            <a
              // target="_blank"
              // rel="noreferrer"
              href="#"
            >
              <i class="fab fa-facebook-f fab-special"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/harsh-porwal/ "
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/HharshPorwal"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCyu7fWw8L_FaRonKMgVu8-w"
            >
              <i class="fab fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.harshporwal.com/"
            >
              <i class="fa fa-regular fa-globe fero"></i>
            </a>
          </div>
        </div>
        <div className="footer-box box-2">
          <div className="sub-content-box">
            <h5>About Us</h5>

            <Link to="/">
              <p>Company Profile</p>
            </Link>

            <Link to="/">
              <p>Careers</p>
            </Link>
          </div>
        </div>
        <div className="footer-box box-3">
          <div className="sub-content-box">
            <h5>Developer</h5>
            <p>Harsh Porwal</p>
            <p>contact@harshporwal.com</p>
          </div>
        </div>
        <div className="footer-box box-4">
          <div className="sub-content-box">
            <h5> Office Address</h5>
            <p>
              Antillia, Altamount Road,
              <br /> Cumballa Hill, Mumbai <br />
              Maharashtra - 425660{" "}
            </p>
          </div>

          {/* <div className="sub-content-box">
            <h5>Toll-free Number</h5>
            <p>18002004112</p>
          </div> */}
        </div>
      </footer>
      <div className="footer-bar-cont">
        <div className="footer-bar">
          <div className="flex1">
            <p>© Book Store Pvt. Ltd 2022 | All Rights Reserved</p>
          </div>
          <div className="flex2">
            <p>
              <Link to="/terms-and-conditions"> Terms & Conditions </Link> |{" "}
            </p>
            <p>
              {" "}
              <Link to="/refund-policy"> Refund Policy </Link> |{" "}
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            </p>
            <p>Sitemap </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
