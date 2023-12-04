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

const withLogger = (Component) => {
  const log = (item) => console.log("Logger: ", item);

  return (props) => <Component log={log} {...props} />;
};

const ButtonWithLogger = withLogger(Button);

export default ButtonWithLogger;
