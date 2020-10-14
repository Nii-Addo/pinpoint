import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import PostList from "../components/layouts/PostList";
import { FetchContext } from "../contexts/FetchContext";
import { PostContext } from "../contexts/PostContext";
import "../css/Home.css";

const Home = (props) => {
  const postContext = useContext(PostContext);
  const fetchContext = useContext(FetchContext);
  useEffect(() => {
    try {
      fetchContext.authAxios.get("/posts/").then((res) => {
        postContext.setPosts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchContext.authAxios]);
  return (
    <div className="home-mod">
      <div className="media-content">
        {!postContext.posts ? (
          <>
            <div className="text-tittle">Top videos for you</div>
            <PostList />
          </>
        ) : (
          <div className="no-media ">No videos available for you yet</div>
        )}
      </div>
    </div>
  );
};

export default Home;
