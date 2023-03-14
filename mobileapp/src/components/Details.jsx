import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Details() {
    let [product, setProduct] = useState();
    let {id} =  useParams();
    useEffect(() => {
        axios.get(`http://localhost:1234/products/${id}`).then(response => {
            setProduct(response.data);
        });
    }, [id]);
    return <div>
       <h1>Product Details of {id} </h1>
       <div className="row">
            <div className="col-md-4">
                <img src={product?.productImageUrl} style={{"width":"280px"}}/>
            </div>
            <div className="col-md-8">
                Name : {product?.productName} <br />
                {product?.productDescription} <br />
                Price : {product?.productPrice} <br />
            </div>
       </div>
    </div>
}