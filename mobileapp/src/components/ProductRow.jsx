import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductRow({ product }) {
    let {productImageUrl, productDescription, productPrice} = product;
    return <div className="col-md-4 col-lg-3">
        <div className="card">
            <img className="card-img-top" src={productImageUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{productDescription}</p>
                </div>
                <div className="card-footer">
                    Rs. {productPrice}
                    <FontAwesomeIcon icon={faHeart} color="red" />
                    <FontAwesomeIcon icon={faShoppingCart} color="blue"/>
                </div>
        </div>
    </div>
}