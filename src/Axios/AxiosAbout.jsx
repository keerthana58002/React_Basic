
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./AxiosApi"; 

const About = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchPosts, // Fixed function call
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="font-bold mb-4">About Page</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} >
            <h3>{user.title}</h3>
            <p>{user.body} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default About;
