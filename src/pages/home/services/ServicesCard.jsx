import React from "react";

const ServicesCard = ({ post, handleDelete }) => {
  const { _id, banner, title } = post;

  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="rounded-2xl"
            src={banner}
            alt={title}
          />
        </figure>
        <div className="card-body bg-amber-600 h-28">
          <h2 className="card-title">{title}</h2>
        </div>
        <button
          onClick={() => handleDelete(_id)}
          className="btn-primary btn-md my-2"
        >
          Delete
        </button>
        {/* <button className="btn-secondary btn-md">Edit</button> */}
      </div>
    </div>
  );
};

export default ServicesCard;
