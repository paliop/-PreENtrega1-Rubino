import { Link } from "react-router-dom";

const Arbol = ({ordenarAsc, ordenarDes}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "15% 70% 15%" }}>
      <div></div>
      <div>
        <h4 className="tit2">Plantas</h4>
        <ul style={{ marginTop: 10 }}>
          <li>
            <Link className="tit2" to="/categoria/PlantasInterior">
              Plantas Interior
            </Link>
          </li>
          <li>
            <Link className="tit2" to="/categoria/PlantasExterior">
              Exterior
            </Link>
          </li>
        </ul>
        <h4 className="tit2">Contenedores</h4>
        <ul style={{ marginTop: 10 }}>
          <li>
            <Link className="tit2" to="/categoria/Terrarios">
              Terrarios
            </Link>
          </li>
          <li>
            <Link className="tit2" to="/categoria/Hidrarios">
              Hidrarios
            </Link>
          </li>
        </ul>
        <div>
          <h4 className="tit2">Filtrar por</h4>
          <ul style={{ marginTop: 10 }}>
            <li>
              <Link className="tit2" to="/luz/directa">
                Luz directa
              </Link>
            </li>
            <li>
              <Link className="tit2" to="/luz/indirecta">
                Luz indirecta
              </Link>
            </li>
            <li>
              <Link className="tit2" to="/luz/baja">
                Luz baja
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="tit2">Ordenar por Precio</h4>
          <button className="boton2" style={{ marginTop: 10 }} onClick={ordenarAsc}>
            Mayor a menor
          </button>
          <button className="boton2" style={{ marginTop: 10 }} onClick={ordenarDes}>
            Menor a Mayor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arbol;
