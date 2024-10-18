import React from "react";

function Button({ button, filter }) {
  const bgColors = ["#9162c025", "#449d5d25", "#d1772425", "#3b88e925"];
  const textColors = ["#9162c0", "#449d5d", "#d17724", "#3b88e9"];

  return (
    <div className="buttons flex gap-5">
      {button.map((cat, i) => {
        const bgColor = bgColors[i % bgColors.length];
        const textColor = textColors[i % textColors.length];
        return (
          <button
            key={i}
            type="button"
            onClick={() => filter(cat)}
            className="btn px-3 rounded-full font-inter"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
