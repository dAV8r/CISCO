import axios from "axios";
import { createContext, useEffect, useState} from "react";

const ProductContext = createContext();  


function ProductProvider(props) {
    let [products, setProducts] = useState();

    // like componentDidMount
    useEffect(() => {
        axios.get("http://localhost:1234/products").then(response => {
            setProducts(response.data);
        });
    }, []);

    return <ProductContext.Provider value={{products}}>
        {props.children}
    </ProductContext.Provider>
}

export {ProductContext, ProductProvider}