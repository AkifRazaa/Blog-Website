import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetail.css";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { incrementViewCount } from "../../Store/actions";
import hero_image from "../../assets/hero-image.png"

const BlogDetail = () => {
  const { id } = useParams(); // Get the post id from the URL
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  const viewCount = useSelector((state) => state.blog.views[id] || 0); // Get view count from Redux store

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const response = await axios.get(
          `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
        );
        setPost(response.data);
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
          src={post.Image}
          alt="Post"
          className="post-detail-image"
          onError={handleError}
        />{" "}
      </div>

      <div className="post-detail">
        {/* <h2>{post.Subtitle}</h2> */}
        <p className="post-paragraph">{post.Article}</p>
      </div>
    </section>
  );
};

export default BlogDetail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import "./BlogDetail.css";
// import { incrementViewCount } from "../../Store/actions";

// const BlogDetail = () => {
//   const { id } = useParams(); // Get the post id from the URL
//   const [post, setPost] = useState(null);
//   const dispatch = useDispatch();
//   const viewCount = useSelector((state) => state.blog.views[id] || 0); // Get view count from Redux store

//   useEffect(() => {
//     const getBlogDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
//         );
//         setPost(response.data);
//         dispatch(incrementViewCount(id)); // Increment view count on load
//       } catch (error) {
//         console.error("Error fetching post details:", error);
//       }
//     };

//     getBlogDetails();
//   }, [id, dispatch]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <section>
//       <div className="post-detail">
//         <h1>{post.Title}</h1>
//         <div className="post-detail-image-container">
//           <img src={post.Image} alt="Post" className="post-detail-image" />
//         </div>
//         <h2>{post.Subtitle}</h2>
//         <p>{post.Article}</p>
//         <div className="post-view-count">
//           <p>Views: {viewCount}</p> {/* Show view count */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetail;
