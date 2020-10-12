import React, { createContext, useState } from "react";

const PostContext = createContext();
const { Provider } = PostContext;

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </Provider>
  );
};

export { PostProvider, PostContext };
