import "../Styles/Footer.css";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <a href="#">
                <span className="ft-logo">
                  <FaHeart className="ft-logo-icon" />
                </span>
                <span>
                  AyurSutra
                  <small>Panchakarma Excellence</small>
                </span>
              </a>
            </p>
            <p className="ft-description">
              Transforming Ayurvedic healthcare with intelligent patient
              management, seamless booking, and comprehensive wellness tracking.
            </p>
            <ul className="ft-contact">
              <li>
                <span role="img" aria-label="phone">
                  📞
                </span>
                +91 98765 43210
              </li>
              <li>
                <span role="img" aria-label="email">
                  ✉️
                </span>
                support@ayursutra.com
              </li>
              <li>
                <span role="img" aria-label="location">
                  📍
                </span>
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-copyright">
          <p>
            © 2025 AyurSutra. All rights reserved. | Empowering Ayurvedic
            Healthcare
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
