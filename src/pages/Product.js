import { useParams } from "react-router-dom";

const Product = (props) => {
    const { id } = useParams();
    return (
        <h1>Product page - {id}</h1>
    );
}

export default Product;