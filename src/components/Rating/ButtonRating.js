import React from "react";
import { Button } from "react-bootstrap";

const ButtonRating = ({ title, handleClick }) => {
  return (
    <Button
      variant="light"
      className="ml-auto btn-rating mx-2"
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default ButtonRating;
