// import { useState } from "react";

// function Cart({ cart, setCart, showToast }) {
    

//     function increaseQty(id) {
//         const updatedCart = cart.map(item =>
//             item.id == id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//         );
//         setCart(updatedCart);
//         showToast("Quantity increased✔️");
//     }

//     function decreaseQty(id) {
//         const updatedCart = cart.map(item =>
//             item.id == id
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//         )
//         .filter(item => item.quantity > 0);
//         setCart(updatedCart);
//         showToast("Quantity decreased❌");
//     }

//     function removeFromCart(index) {
//         const updatedCart = cart.filter((_, i) => i !== index);
//         setCart(updatedCart);
//         showToast("Item removed❌");
//     }

//     const total = cart.reduce(
//         (sum, item) => sum + item.price * item.quantity, 0);
//     return (
//         <div className="cart-container">
//             <h2 className="cart-title">Your Cart</h2>

//             {
//                 cart.length === 0 ? (
//                     <>
//                         <div className="empty-cart">
//                             <h3>Your cart is empty 🛒</h3>
//                             <p>Looks like you haven't added anything yet.</p>
//                             <button className="shop-now" onClick={() => window.location.href = "/"}>
//                                 Shop Now
//                             </button>
//                         </div>
//                     </>
                    
//                 ) : (
//                         <>
//                             {
//                                 cart.map((item) => (
//                                     <div key={item.id} className="cart-item">
//                                         <div className="cart-left">
//                                             <img src={item.image} alt={item.name} className="cart-img" />

//                                             <div className="cart-info">
//                                                 <h4>{item.name}</h4>
//                                                 <p>Price: ₹{item.price}</p>
                                                
//                                             </div>
//                                         </div>
//                                         <div className="quantity">
//                                                 <button onClick={() => decreaseQty(item.id)}>-</button>
//                                                 <span>{item.quantity}</span>
//                                                 <button onClick={() => increaseQty(item.id)}>+</button>
//                                         </div>
//                                         <div className="total">₹{item.price * item.quantity}</div>
//                                     </div>
//                                 ))
//                             }
//                             <div className="total-price">
//                                 <span>Total Price:</span> 
//                                 <span>₹{total}</span>
//                             </div>
//                         </>
//                 )
//             }
            
//         </div>
//     );
// }

// export default Cart;


function Cart({ cart, setCart, showToast }) {
    const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
    showToast("Item removed❌");
  };

const updateQuantity = (id, amount) => {
    const item = cart.find(p => p.id === id);
    if (amount === -1 && item.quantity === 1) {
        // REMOVE item
        setCart(cart.filter(p => p.id !== id));
        showToast("Item removed ❌");
        return;
    }
    // Otherwise update quantity
    setCart(cart.map(p =>
        p.id === id
        ? { ...p, quantity: p.quantity + amount }
        : p
    ));

    if (amount === -1)
        showToast("Quantity Decreased ❌");
    else
        showToast("Quantity Increased ✔️");
};
  

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      
      {/* LEFT: Items */}
      <div className="cart-items">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
            <div className="empty">
                <p>Your cart is empty 🛒</p>
                <p>Looks like you haven't added anything yet.</p>
                <button className="shop-now" onClick={() => window.location.href = "/"}>
                  Shop Now
                </button>
            </div>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.id}>
              
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

                <button 
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>

              <div className="cart-price">
                ₹{item.price * item.quantity}
              </div>

            </div>
          ))
        )}
      </div>

      {/* RIGHT: Summary */}
      {cart.length > 0 && (
            <div className="cart-summary">
                <h2>Order Summary</h2>
                <p>Total Items: {cart.length}</p>
                <h3>Total: ₹{total}</h3>
                <button className="checkout-btn">
                    Proceed to Checkout
                </button>
            </div>
        )}
    </div>
  );
}

export default Cart;