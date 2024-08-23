import CartWidget2 from "./CartWidget2";
import Logo2 from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success-subtle container-fluid">
        <Link to="/">
          <img src={Logo2} width="130" height="100" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyItems: "center" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ paddingLeft: 10 }}>
              <Link className="tit4" to="/categoria/PlantasInterior">
                Plantas Interior
              </Link>
            </li>
            <li className="nav-item" style={{ paddingLeft: 10 }}>
              <Link className="tit4" to="/categoria/PlantasExterior">
                Plantas Exterior
              </Link>
            </li>
            <li className="nav-item" style={{ paddingLeft: 10 }}>
              <Link className="tit4" to="/categoria/Terrarios">
                Terrarios
              </Link>
            </li>
            <li className="nav-item" style={{ paddingLeft: 10 }}>
              <Link className="tit4" to="/categoria/Hidrarios">
                Hidarios
              </Link>
            </li>
            <li className="nav-item" style={{ paddingLeft: 10 }}>
              <Link className="tit4" to="/cart">
                Ver Carrito
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="Cart">
            <CartWidget2></CartWidget2>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
