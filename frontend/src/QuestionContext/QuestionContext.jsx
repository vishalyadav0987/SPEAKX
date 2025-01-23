import React, { createContext, useContext, useState } from 'react'
export const QuestionContext = createContext(null);


export const useQuestionContext = () => {
    return useContext(QuestionContext);
}

export const QuestionContextProvider = ({ children }) => {
    const [queryBasedQuestion, setQueryBasedQuestion] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <QuestionContext.Provider value={
            {
                queryBasedQuestion,
                setQueryBasedQuestion,
                loading,
                setLoading,
            }
        }>
            {children}
        </QuestionContext.Provider>
    )
}




