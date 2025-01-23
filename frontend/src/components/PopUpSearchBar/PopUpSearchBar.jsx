import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
import { BsFillQuestionSquareFill } from "react-icons/bs"; // Anagram
import axios from 'axios';
import { useQuestionContext } from '../../QuestionContext/QuestionContext';
import './PopUpSearchBar.css';

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

const PopUpSearchBar = ({ setPopSearchBarOpen }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { queryBasedQuestion, setQueryBasedQuestion } = useQuestionContext();

    useEffect(() => {
        const searchOnQueryHandler = async () => {
            if (!searchQuery) return; // Don't search if the query is empty
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/find?title=${searchQuery}`);
                if (!response.data.success) {
                    console.log("No data found");
                    setQueryBasedQuestion([]);
                    return;
                }
                const data = response.data;
                setQueryBasedQuestion(data.questions);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        searchOnQueryHandler();
    }, [searchQuery, setQueryBasedQuestion]);

    const highlightedText = (text) => {
        if(!searchQuery) return text;
        const querySearparts = text.split(new RegExp(`(${searchQuery})`, 'gi')); 
         // return array of word that will write in query
        return querySearparts.map((part, index) =>
            part.toLowerCase() === searchQuery.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span> 
            ) : (
                part 
            )
        );
    }
    return (
        <>
            <div className="overlay" onClick={() => { setPopSearchBarOpen(false); }}></div>
            <div className="pop-serach-bar-container">
                <div className="pop-search-bar-content">
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
                            <div className='search-history-box-heading'>
                                {searchQuery.length > 0 ? "Search Results" : "Search History"}
                            </div>
                            {
                                searchQuery.length === 0 ? (
                                    <div className='search-history-list'>
                                        {searchHistory.map((history, index) => (
                                            <div key={index}>
                                                <RxCountdownTimer />
                                                <li>{history}</li>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="search-on-query-question-list">
                                        {queryBasedQuestion?.length > 0 ? (
                                            <div className="search-on-query-list-item">
                                                {queryBasedQuestion.map((question, index) => (
                                                    <div className='single-search-question' key={index}>
                                                        <div className="question-icon">
                                                            <BsFillQuestionSquareFill />
                                                        </div>
                                                        <div className="question-details">
                                                            <div>{
                                                                highlightedText(question?.title)
                                                                }
                                                                </div>
                                                            <div>{question?.type}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div>No results found for your search.</div>
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopUpSearchBar;
