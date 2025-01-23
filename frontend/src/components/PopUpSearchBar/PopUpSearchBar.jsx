import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
import { BsFillQuestionSquareFill } from "react-icons/bs"; // Anagram
import './PopUpSearchBar.css'

const questionType = [
    "Anagrams",
    "Crossword",
    "Cryptic",
    "General Knowledge",
    "Quick",
    "Themed",
];

const searchHistory = [
    "what is the capital of France?",
    "who is the president of the United States?",
    "What",
    "what is the",
    "the example",
];

const accordingToQuerySearch = [
    { title: "What is capital of INDIA?", type: "General Knowledge" },
    { title: "Who is the president of USA?", type: "General Knowledge" },
    { title: "Rearrange the words to form a sentence", type: "Anagram" },
    { title: "In my previous role as a lawyer, I _______ engaged with clients, meticulously prepared legal documents, and confidently represented them in various court proceedings?", type: "MCQ" },
    { title: "Since we haven't met before, I'd love to learn more about your role here?", type: "READ_ALONG" },
    { title: "What is capital of INDIA?", type: "General Knowledge" },
    { title: "Who is the president of USA?", type: "General Knowledge" },
    { title: "Rearrange the words to form a sentence", type: "Anagram" },
    { title: "In my previous role as a lawyer, I _______ engaged with clients, meticulously prepared legal documents, and confidently represented them in various court proceedings?", type: "MCQ" },
    { title: "Since we haven't met before, I'd love to learn more about your role here?", type: "READ_ALONG" },
];

const PopUpSearchBar = ({setPopSearchBarOpen,}) => {
    const [searchQuery, setSearchQuery] = useState("");
    

    return (
        <>
        <div className="overlay" onClick={()=>{setPopSearchBarOpen(false)}}></div>
            <div className="pop-serach-bar-container">
                <div className="pop-search-bar-content" >
                    <div className="pop-search-box">
                        <button><FiSearch /></button>
                        <input
                            type="text"
                            placeholder="Search for a question..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="pop-search-bar-history-type">
                        <div className="question-type-box">
                            <h4>Question Type</h4>
                            <div className="question-type-list">
                                {questionType.map((type, index) => (
                                    <div key={index}>{type}</div>
                                ))}
                            </div>
                        </div>
                        <div className="search-history-box">
                            <div
                                className='search-history-box-heading'>
                                {
                                    searchQuery.length > 0 ? ("Search Results") : ("Search history")
                                }
                            </div>
                            {
                                searchQuery.length === 0 ? (
                                    <div className='search-history-list'>
                                        {searchHistory.map((history, index) => (
                                            <div key={index}>
                                                <RxCountdownTimer />
                                                <li >{history}</li>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="search-on-query-question-list">
                                        {accordingToQuerySearch.length > 0 && (
                                            <div
                                                className="search-on-query-list-item"
                                            >
                                                {
                                                    accordingToQuerySearch.map(
                                                        (question, index) => (
                                                            <div
                                                                className='single-search-question'
                                                                key={index}
                                                            >
                                                                <div
                                                                    className="question-icon"
                                                                >
                                                                    <BsFillQuestionSquareFill />
                                                                </div>
                                                                <div
                                                                    className="question-details"
                                                                >
                                                                    <div>
                                                                        {question?.title}
                                                                    </div>
                                                                    <div>
                                                                        {question?.type}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUpSearchBar
