import React from "react";
import "./FeatureCard.css";
import { IoMdEye } from "react-icons/io";
import car_image from "../../assets/car.jpeg";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  return (
    <div className="feature-card-wrapper">
      <div className="feature-card">
        <div className="feature-card-image">
          <img src={car_image} alt="Car" />
        </div>
        <div className="feature-card-content">
          <div className="feature-card-header">
            <p className="feature-card-date">Posted on October 6th 2021</p>
            <p className="feature-card-views">
              <IoMdEye /> 563 views
            </p>
            <span className="card-featured">FEATURED</span>
          </div>
          <h2 className="feature-card-title">
            Should I Buy a New Car or Lease a New Car in 2021?
          </h2>
          <p className="feature-card-description">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </p>
          <div className="feature-card-footer">
            <Link className="read-more">Read more →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
