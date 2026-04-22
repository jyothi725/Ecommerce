import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>Welcome to STYLE.</p>
        <p>  
          We believe that fashion should be effortless, expressive, and accessible. 
          Born out of a passion for clean aesthetics and modern design, STYLE was created to be more than just 
          an e-commerce platform—it’s a curated destination for the modern individual.
        </p>
        <h3>The Collection</h3>
        <p>Our shop focuses on the "new classics." Whether it’s the perfect pair of baggy denim, an oversized 
          staple shirt, or the delicate layers of a "soft girl" aesthetic, we source pieces that transition 
          seamlessly from a casual weekend to a focused workday. We prioritize silhouettes that feel as good as 
          they look.
        </p>
        <h3>The Vision</h3>
        <p>
          At STYLE, we are constantly evolving. As a digital-first brand, we leverage modern technology—built 
          with the speed and fluidity of React—to ensure your shopping experience is as seamless as your 
          wardrobe. We believe that a great interface is just as important as a great outfit.
        </p>
        <h3>Why STYLE?</h3>
        
        <div className="about-features">
          <div className="feature">
            <h3>Curated Aesthetics</h3>
            <p>Longevity over fast fashion.</p>
          </div>

          <div className="feature">
            <h3>Modern Ease</h3>
            <p>Seamless shopping for your lifestyle.</p>
          </div>

          <div className="feature">
            <h3>Quality Products</h3>
            <p>Carefully selected fashion items.</p>
          </div>

          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping.</p>
          </div>

          <div className="feature">
            <h3>Secure Payments</h3>
            <p>Safe and smooth checkout experience.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;