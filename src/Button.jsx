import React from "react";

const Button = ({ log, onClick, title }) => {
  return (
    <button
      onClick={(e) => {
        log(e);
        onClick(e);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
