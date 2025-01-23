import React, { useRef } from "react";
import "./QuestionType.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const QuestionType = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -120,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 120,
      behavior: "smooth",
    });
  };

  return (
    <div className="button-scroll-container">
      <button className="scroll-arrow" onClick={scrollLeft}>
      <FaAngleLeft />
      </button>
      <div className="button-wrapper" ref={scrollContainerRef}>
        {["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6", "Button 7", "Button 8", "Button 9", "Button 10"].map((name, index) => (
          <button key={index} className="scrollable-button">
            {name}
          </button>
        ))}
      </div>
      <button className="scroll-arrow" onClick={scrollRight}>
      <FaAngleRight />
      </button>
    </div>
  );
};

export default QuestionType;
