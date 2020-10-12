import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import PostList from "../components/layouts/PostList";
import { PostFetch } from "../utilities/Fetch";
import { PostContext } from "../contexts/PostContext";
import "../css/Home.css";

const Home = (props) => {
  const postContext = useContext(PostContext);
  useEffect(() => {
    try {
      PostFetch.get("/").then((res) => {
        postContext.setPosts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="home-mod">
      <div className="text-tittle">Top videos for you</div>
      <div className="media-content">
        <PostList />
      </div>
    </div>
  );
};

export default Home;
