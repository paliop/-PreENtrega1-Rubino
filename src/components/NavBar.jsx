import CartWidget2 from "./CartWidget2"
import Logo2 from "../assets/images/logo3.png"

const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-success-subtle container-fluid">
  
    
    <a href="#"><img src={Logo2} width="130" height="100"/></a>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyItems:"center"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plantas
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Interior</a></li>
            <li><a className="dropdown-item" href="#">Exterior</a></li>
            
            
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Macetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Terrarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hidrarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
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