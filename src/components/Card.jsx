import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ obj, currency }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-2"
      onClick={() => {
        navigate(`/product/${obj._id}`);
      }}
    >
      <div className="overflow-hidden">
        <img
          src={obj.image[0]}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      <div>
        <h1>{obj.name}</h1>
        <p>
          {obj.price}
          {currency}
        </p>
      </div>
    </div>
  );
};

export default Card;
