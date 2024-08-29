import React, { useState } from "react";
import "./Card.css";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import hero_image from "../../assets/hero-image.png";

const Card = ({ id, title, subtitle, article, image }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(image);
  const viewCount = useSelector((state) => state.blog.views[id] || 0);

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  // Setting a default image because some of the images from API are not loading
  const handleError = () => {
    setImgSrc(hero_image);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src={imgSrc}
        alt="Blog Post"
        className="card-image"
        onError={handleError}
      />
      <div className="card-content">
        <div className="card-header">
          <p className="card-date-card">Posted on October 6th 2021</p>
          <p className="card-views-card">
            <IoMdEye /> {viewCount} views
          </p>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        {/* <p className="card-description">{article}</p> */}
      </div>
    </div>
  );
};

export default Card;
