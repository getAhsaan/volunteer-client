import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-server-psi.vercel.app/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleSearch = (e) => {
    if (e.target.value) {
      fetch(`https://volunteer-server-psi.vercel.app/searchByTitle/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    } else {
      fetch("https://volunteer-server-psi.vercel.app/posts")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPosts(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="text-center text-2xl">Loading...</div>;
  } else {
    return (
      <div className="mt-8">
        <h2 className="text-center text-4xl uppercase font-bold">
          I grow by helping people in need.
        </h2>
        <div className="text-center my-4">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search service by title"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="grid md:grid-cols-4 gap-4 my-8">
          {posts.map((post) => (
            <ServicesCard
              key={post._id}
              post={post}
            ></ServicesCard>
          ))}
        </div>
      </div>
    );
  }
};

export default Services;
