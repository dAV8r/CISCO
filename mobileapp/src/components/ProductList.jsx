import { useContext } from "react"
import { Container } from "react-bootstrap";
import { ProductContext } from "./ProductContext"
import ProductRow from "./ProductRow";

export default function ProductList() {
    let {products} = useContext(ProductContext);
    return <Container>
            <div className="row">
            {
                products?.map(product => <ProductRow key={product.id} product={product}/>)
            }
             </div>
    </Container>
}