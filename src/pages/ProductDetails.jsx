import { useParams } from "react-router-dom";
import products from "../data/products";
import { FaStar } from "react-icons/fa";

function ProductDetails({ addToCart, showToast }) {
    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));
    if(!product) {
        return <h2>Product not found</h2>;
    }


    return (
        <div className="details-container">
            <img src={product.image} alt={product.name} className="details-img"/>
            <div className="details-info">
                <h2>{product.name}</h2>
                <p className="price">Price: ₹{product.price}</p>
                <p className="desc"><span>Description: </span>{product.description}</p>
                <p className="category"><span>Category: </span>{product.category}</p>
                <p className="ratings"><span>Ratings<FaStar style={{ color:"gold"}}/>: </span>{product.rating}</p>
                <button onClick={() => {
                    addToCart(product);
                    showToast("Item added to cart🛒");
                }}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;