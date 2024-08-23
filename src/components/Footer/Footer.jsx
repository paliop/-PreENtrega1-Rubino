import { Link } from "react-router-dom";
import ig from "../../assets/images/ig.svg"

const Footer = () => {
  return (
    <div>
      <div className="container-fluid" style={{ height: 30, width: 30 }}></div>

      <div
        className="container-fluid bg-success-subtle"
        style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}
      >
        <div className="col">
          <h3 className="tit4" style={{ fontSize: "x-Large",fontWeight:800  }}>
            NAVEGACION
          </h3>
          <Link to="/" className="tit4">
            <h5>Productos</h5>
          </Link>
          <Link to="/cart" className="tit4">
            <h5>Carrito</h5>
          </Link>
        </div>
        <div>
          <h3 className="tit5" style={{ fontSize: "x-Large" }}>
            CONTACTANOS
          </h3>
          <h4 className="tit5">paliplantde@gmail.com</h4>
          <h4 className="tit5">Rosario, invencible provincia de santa fe</h4>
        </div>
        <div>
        <h3 className="tit5" style={{ fontSize: "x-Large" }}>
            REDES SOCIALES
          </h3>
          <div className="row" style={{display:"grid", gridTemplateColumns:"5% 5%"}}>
            <div className="col">
              <a href="instagram.com/paliplande">
              <img src={ig} width="28"/>
              </a>
            </div>
            <div className="col">
                <a href="instagram.com/paliplande"><h4 className="tit5">Instagram</h4></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
