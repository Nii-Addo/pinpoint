import axios from "axios";

const PublicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_PUBLIC_URL,
});

const PostFetch = axios.create({
  baseURL: process.env.REACT_APP_API_POST_URL,
});

export { PublicFetch, PostFetch };
