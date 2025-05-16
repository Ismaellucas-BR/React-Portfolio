import React from "react";
import { useNavigate } from "react-router-dom";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

function Menu({ menuItem }) {
  const navigate = useNavigate();

  function HandleViewProjectDetails(id) {
    navigate(`projects/${id}`);
  }

  return (
    <div className="item w-full grid lg:grid-cols-3 gap-8 justify-items-center mt-7 px-5 text-white">
      {menuItem.map((item) => (
        <div
          className="item-con w-full hover:shadow-xs hover:shadow-light-green/90 hover:cursor-pointer hover:rounded-lg hover:scale-110 transition-all"
          key={item.id}
          onClick={() => HandleViewProjectDetails(item.id)}>
          <div className="item-container bg-opacity-50 border border-[#333] p-4 rounded-lg shadow-md font-inter">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-40 object-cover object-top rounded-lg"
              width={800}
              height={800}
            />
            <h2 className="mt-4 text-xl font-bold">
              {truncateText(item.name, 30)}
            </h2>
            <p className="mt-2">{truncateText(item.description, 100)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
