import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";
import axios from "axios";
import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6); // Initially show 6 posts

  const getBlogPosts = async () => {
    try {
      const response = await axios.get(
        "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
      );
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <section>
      <Hero />
      <FeatureCard />
      <div className="card-container container">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <Card
            key={post.id}
            title={post.Title}
            subtitle={post.Subtitle}
            article={post.Article}
            image={post.Image}
            id={post.id}
          />
        ))}
      </div>
      {visiblePosts < blogPosts.length && (
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      )}
    
    </section>
  );
};

export default Blog;
