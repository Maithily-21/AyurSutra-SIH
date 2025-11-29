import BodyImg from "../Assets/mainimg1.jpg";
import { FaRobot, FaWindowClose, FaHeart } from "react-icons/fa";
import "../Styles/Front.css";
import { useContext } from "react";
import { ChatbotOpen } from "./ChatbotOpen";

function Front() {
  const { open, setOpen } = useContext(ChatbotOpen);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <div className="text-identity">
            <span className="text-logo">
              <FaHeart className="text-logo-icon" />
            </span>
            <div>
              <h1 className="text-brand">AyurSutra </h1>
              <p className="text-subtitle">Empowering Panchakarma</p>
            </div>
          </div>
          <p className="text-description">
          A chatbot that blends ancient Ayurvedic wisdom with cutting-edge intelligence.
          Find your Prakriti, get rituals tailored to your dosha, and experience a new way
          of personalized healthcare.
          </p>
          <button
            className={`${
              open ? "text-appointment-btn-close" : "text-appointment-btn"
            }`}
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />}
            <span>{open ? "Close" : "Open"} Chat Bot</span>
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={BodyImg} alt="Body" />
        </div>
      </div>
    </div>
  );
}
export default Front;
