import React, { useEffect, useRef, useState } from 'react';
import './QuestionUi.css';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import gsap from 'gsap';

const QuestionUi = ({question,questionNo,questionRefs,index}) => {
  // console.log(question);
  
  const [isOpen, setIsOpen] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const mcqOptionsRef = useRef(null);

  useEffect(() => {
    if(isOpen){
        gsap.fromTo(mcqOptionsRef.current,
            { opacity: 0, y: 50,height:0 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",height:100 } 
          );
    }
  },[isOpen])

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const clearSelection = () => {
    setSelectedAnswer('');
  };

  const checkQuestionMarkIsAvailOrNot = question?.title.substr(question?.title.length-1);
  

  return (
    <div className="question-container" ref={questionRefs[index]}>
      <div className="question-header">
        <span className="question-text" >
          Question {questionNo+1}: {
            checkQuestionMarkIsAvailOrNot !== "." ? `${question?.title}?` : `${question?.title.substr(0,question?.title.length-1)}?`
          } 
          {" "}<span style={{
          color: '#989898',
          fontSize: '12px',
        }}>({question?.type})</span></span>
        <div className="accordion-arrow" onClick={toggleAccordion}>
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </div>
      </div>

      {isOpen && (
        <div className="mcq-options" ref={mcqOptionsRef}>
          <label>
            <input
              type="radio"
              name="answer"
              value="A"
              checked={selectedAnswer === 'A'}
              onChange={() => setSelectedAnswer('A')}
            />
            A. Paris
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="B"
              checked={selectedAnswer === 'B'}
              onChange={() => setSelectedAnswer('B')}
            />
            B. London
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="C"
              checked={selectedAnswer === 'C'}
              onChange={() => setSelectedAnswer('C')}
            />
            C. Rome
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="D"
              checked={selectedAnswer === 'D'}
              onChange={() => setSelectedAnswer('D')}
            />
            D. Berlin
          </label>
        </div>
      )}

      <div className="clear-button-container">
        <button className="clear-button" onClick={clearSelection}>
          Clear Option
        </button>
      </div>
    </div>
  );
};

export default QuestionUi;
