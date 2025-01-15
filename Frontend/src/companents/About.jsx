import React from 'react'

function About() {
  return (
    <div className='About'>
      <div className="container">
        <div className="content">
          <p>Awesome Products</p>
          <h2>Featured Products</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</span>
        </div>
        <div className="card">
          <div className="left">
            <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt=""  />
          </div>
          <div className="right">
            <h1>About This Product</h1>
            <span style={{ opacity: ".5", lineHeight: "2", fontSize: "20px" }}>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</span><br />
            <span style={{ opacity: ".5", lineHeight: "1.5", fontSize: "20px" }}>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</span>
            <p>Price:</p>
          <div className="spans">
          <span className='span'>$269.00</span>
          <span >$69.00</span>
          </div>
            <div className="btns">
              <button>View Details</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
