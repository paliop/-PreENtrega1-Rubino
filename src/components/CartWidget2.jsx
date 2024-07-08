
import CartLogo from "/src/assets/images/cart3.svg"



const CartWidget2 = () => {
  return (
    <div>
    <button type="button" className="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

        <img src={CartLogo} width="28"/>
        
        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill text-bg-warning">1</span>


        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div>
</div>
  )
}


export default CartWidget2;