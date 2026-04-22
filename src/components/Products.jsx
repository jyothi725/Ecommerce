import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ addToCart, search, showToast }) {
    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <section id = "products-section" className="products">
            {filteredProducts.length === 0 ? (
                <p>No products found</p>
            ) : (filteredProducts.map((item) => (
                    <ProductCard 
                        key={item.id} 
                        product={item} 
                        addToCart={addToCart}
                        showToast={showToast}
                    />
                ))
            )}
            
        </section>
    );
}

export default Products;