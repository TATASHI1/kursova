import "./style.css"
import ProductsList from "./productsComponent"

function MainConponent() {

    return(
        <div>
            <div className="header__body">
                <h1>the best delivery restaurant of Georgian cuisine</h1><img src="img/back.png" alt="" />
            </div>
            <div className="menu" id="shop">
                <div className="menu__body" id="shop">
                    <ProductsList variant="main" />
                </div>
            </div>
        </div>
    )
}

export default MainConponent