
import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard() {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUC4iCAC9ySEFKDcIGSUcoDMlEOslm6WAPw&s", title: "VE4815 Rayon Maternity/Feeding Kurtis", price: 200 },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGIYz9Hbyx-sI5o-AH1NmsJND7R_aPWaVnQ&s", title: "VE4815 Rayon Maternity/Feeding Kurtis", price: 250 },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYtbmLOyDjt6iX1CBkA70CR1eI6YdLd3M_w&s", title: "VE4815 Rayon Maternity/Feeding Kurtis", price: 300 },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1ZNgszWZPGMbpoIeXuHyKalwDFKsIjqWNw&s", title: "VE4815 Avaasa Side Cut Kurtis", price: 350 }
  ];

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top p-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <img className="img-fluid logo"
            src="https://img.freepik.com/premium-vector/flat-vector-illustrative-style-fashion-logo-design-template_650144-5482.jpg?semt=ais_hybrid"
            alt="Logo"/>
          <span className="cart-count"> Cart: {cart.length}</span>
        </div>
      </nav>

      {/* Product Section */}
      <div className="container mt-5">
        <h2 className="text-center mt-5 mb-4">New Arrivals</h2>
        <div className="row justify-content-center">
          {items.map(item => {
            const isInCart = cart.some(cartItem => cartItem.id === item.id);
            return (
              
              <div className="col-md-3 mb-4 d-flex" key={item.id}>
                <div className="card product-card">
                  <img src={item.image} 
                    className="img-fluid rounded product-image" 
                    alt={item.title} />
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    {isInCart ? (
                      <>
                        <button className="btn btn-success" disabled>Added</button>
                        <button 
                          className="btn btn-danger mt-2"
                          onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                      </>
                    ) : (
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductCard;

