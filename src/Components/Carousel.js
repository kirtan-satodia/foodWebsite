import React from "react";
import "./Carousel.css";

import delivery_icon from "../icons/delivery.png";
import discount_icon from "../icons/discount.png";
import fresh_icon from "../icons/fresh.png";

export default function Carousel() {
  return (
    <div>
      <section className="speciality">
        <div className="special">
          <img src={delivery_icon} alt="discount icon" />
          <h3>Discount Voucher</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="special">
          <img src={discount_icon} alt="fresh food" />
          <h3>Fresh Healthy Food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="special">
          <img src={fresh_icon} alt="delivery icon" />
          <h3>Fast Home Delivery</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      <hr className="designerRule"></hr>
    </div>
  );
}
