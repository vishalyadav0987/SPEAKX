import  { useEffect } from 'react'
import { useQuestionContext } from '../QuestionContext/QuestionContext';
import axios from 'axios';

const useFetchQery = (searchQuery,page) => {
    const { setQueryBasedQuestion,setTotalQuestion,setTotalPages
    } = useQuestionContext();

    useEffect(() => {
        const searchOnQueryHandler = async () => {
            if (!searchQuery) return; // Dont search if the query is empty
            try {
                const link = page > 0 ? `http://localhost:3000/api/v1/questions/find?title=${searchQuery}&page=${page}`: `http://localhost:3000/api/v1/questions/find?title=${searchQuery}`
                const response = await axios.get(link);
                if (!response.data.success) {
                    console.log("No data found");
                    setQueryBasedQuestion([]);
                    return;
                }
                const data = response.data;
                setQueryBasedQuestion(data.questions);
                setTotalQuestion(data?.totalItems)
                setTotalPages(data?.totalPages)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        searchOnQueryHandler();
    }, [searchQuery, setQueryBasedQuestion,page]);
}

export default useFetchQery
