import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ProductRow({ product }) {
    let {id, productImageUrl, productDescription, productPrice} = product;
    return <div className="col-md-4 col-lg-3">
        <div className="card">
            <Link to={`/details/${id}`}>
                <img className="card-img-top" src={productImageUrl} alt="Card image cap" />
            </Link>
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