import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetail.css";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { incrementViewCount } from "../../Store/actions";
import hero_image from "../../assets/hero-image.png";
import blogDetail_image from "../../assets/blogDetail-image.jpeg";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.blog.views[id] || 0); // Get view count from Redux store
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const response = await axios.get(
          `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
        );
        setPost(response.data);
        setImgSrc(response.data.Image);
        dispatch(incrementViewCount(id)); // Increment view count on load
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    getBlogDetails();
  }, [id, dispatch]);

  if (!post) return <p>Loading...</p>;

  // Setting a default image because some of the images from API are not loading
  const handleError = () => {
    setImgSrc(hero_image);
  };

  return (
    <section>
      <div className="post-detail">
        <p className="card-date">
          Posted on October 6th 2021{" "}
          <span className="card-view">
            <IoMdEye /> {viewCount} views
          </span>{" "}
        </p>

        <h1>{post.Title}</h1>

        <p className="post-paragraph"> {post.Subtitle} </p>
      </div>

      <div className="post-detail-image-container">
        <img
          src={imgSrc}
          alt="Post"
          className="post-detail-image"
          onError={handleError}
        />{" "}
      </div>

      <div className="post-detail">
        <p className="post-paragraph">{post.Article}</p>

        <h1>This is a blog post headline</h1>
        <p className="post-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis. Ut non urna a
          odio condimentum dictum. Proin egestas erat a orci ultrices, vitae
          bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum
          congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies
          eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam.
          Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci
          mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
          finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi
          bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis
          tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit
          ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel
          enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
        </p>

        <img src={blogDetail_image} alt="blog detail" className="post-detail" />

        <h1>This is a small blog post headline</h1>
        <p className="post-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>

        <p className="post-paragraph styled-paragraph">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante.
        </p>

        <p className="post-paragraph" style={{marginBottom: "200px"}}>
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </div>
    </section>
  );
};

export default BlogDetail;
