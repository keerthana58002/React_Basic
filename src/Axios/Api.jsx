
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Example API

// POST request to submit form data
export const postData = async (formData) => {
  const response = await axios.post(`${API_URL}/posts`, formData);
  return response.data;
};

// GET request using Axios and useQuery
export const fetchData = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
