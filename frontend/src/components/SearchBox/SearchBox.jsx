import React, { useEffect, useRef, useState } from 'react'
import QuestionType from '../QuestionType/QuestionType'
import './SearchBox.css'
import { FiSearch } from "react-icons/fi";
import PopUpSearchBar from '../PopUpSearchBar/PopUpSearchBar';
import gsap from 'gsap';

const SearchBox = () => {
  const [popSearchBarOpen, setPopSearchBarOpen] = useState(false);
  const outsideBoxRef = useRef(null);

  const popUpContainer = useRef(null);
  useEffect(() => {
    if (popSearchBarOpen) {
      gsap.fromTo(popUpContainer.current,
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" } 
      );
    }else {
      gsap.to(
        popUpContainer.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 50, duration: 0.8, ease: "power3.in" }
      );
    }
  },[popSearchBarOpen])

  return (
    <>
      <div className="search-box-container">
        <div className="search-box">
          <div className="search-box-content">
            <input type="text" placeholder="Search for questions"
              onClick={() => setPopSearchBarOpen(!popSearchBarOpen)}
            />
            <button className="search-button">
              <FiSearch />
            </button>
          </div>
          <QuestionType />
          <p className='tag-question'>Popular Questions type</p>
        </div>
      </div>
      <div className="popSearchBar" ref={popUpContainer}>
        
        {popSearchBarOpen && <PopUpSearchBar setPopSearchBarOpen={setPopSearchBarOpen} outsideBoxRef={outsideBoxRef}/>}
      </div>
    </>
  )
}

export default SearchBox
