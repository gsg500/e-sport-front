import { Link } from "react-router-dom";
import "../assets/styles/footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerIcon">
          <Link to="/">
            <i className="fas fa-home fa-2x footerText"></i>
            <p className="footerText">Home</p>
          </Link>
        </div>
        <div className="footerIcon">
          <Link to="/search">
            <i className="fas fa-search fa-2x footerText"></i>
            <p className="footerText">Busca</p>
          </Link>
        </div>
        <div className="footerIcon">
          <Link to="/calendar">
            <i className="far fa-calendar fa-2x footerText"></i>
            <p className="footerText">Agenda</p>
          </Link>
        </div>
        <div className="footerIcon">
          <Link to="/profile">
            <i className="fas fa-user-circle fa-2x footerText"></i>
            <p className="footerText">Perfil</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
