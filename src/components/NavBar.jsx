import CartWidget2 from "./CartWidget2"
import Logo2 from "../assets/images/logo3.png"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-success-subtle container-fluid">
  
    
    <Link to="/"><img src={Logo2} width="130" height="100"/></Link>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyItems:"center"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
    {/*   <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plantas
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/categoria/PlantasInterior">Interior</Link></li>
            <li><Link className="dropdown-item" to="/categoria/PlantasExterior">Exterior</Link></li>
            
            
          </ul>
        </li>
         */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Macetas</a>
        </li> */}
        <li className="nav-item" style={{paddingLeft:10}}>
        <li><Link className="dropdown-item" to="/categoria/PlantasInterior">Plantas Interior</Link></li>
        </li>
        <li className="nav-item" style={{paddingLeft:10}}>
        <li><Link className="dropdown-item" to="/categoria/PlantasExterior">Plantas Exterior</Link></li>
        </li>
        <li className="nav-item" style={{paddingLeft:10}}>
        <Link className="dropdown-item" to="/categoria/Terrario">Terrarios</Link>
        </li>
        <li className="nav-item" style={{paddingLeft:10}}>
        <Link className="dropdown-item" to="/categoria/Hidrario">Hidarios</Link>
        </li>
       
       {/*  <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex align-items-center" role="Cart">
        
        <CartWidget2></CartWidget2>
      </form>

    </div>

</nav>


        </div>
    )
}

export default NavBar