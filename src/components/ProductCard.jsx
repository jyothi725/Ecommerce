import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart, showToast }) {
    const navigate = useNavigate();

    return (
        <div className="product-card"
            onClick={() => {
                navigate(`/product/${product.id}`);
            }
         }
         >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Ratings<FaStar style={{ color: "gold"}}/>: {product.rating}</p>
            <button onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
                showToast("Item added to Cart🛒");
                
              }}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;