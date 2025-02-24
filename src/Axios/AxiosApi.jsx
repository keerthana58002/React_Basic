
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// POST API: Send form data
export const createPost = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};


// GET API: Fetch posts using useQuery
export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;

};
