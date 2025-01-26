const QuestionSchema = require('../modals/QuestionSchema');

const searchQuestion = async (req, res) => {
    try {
        const { title, page = 1, limit = 20 } = req.query;

       const regex = new RegExp(title, 'i'); 

        const questions = await QuestionSchema.aggregate([
            { $match: { title: { $regex: regex } } },
            {
                $addFields: {
                    startsWithQuery: {
                        $cond: [
                            { $regexMatch: { input: "$title", regex: `^${title}`, options: "i" } },
                            1, 
                            2  
                        ]
                    }
                }
            },
            { $sort: { startsWithQuery: 1, title: 1 } },
            { $skip: (page - 1) * limit },
            { $limit: Number(limit) }
        ]).allowDiskUse(true);

        const totalItems = await QuestionSchema.countDocuments({ title: { $regex: regex } });


        res.json({
            success: true,
            page: Number(page),
            totalPages: Math.ceil(totalItems / limit),
            totalItems,
            questions,
        });
    } catch (error) {
        console.error('Error in searchQuestion: ', error);
        res.status(500).json({ success: false, message: error.message });
    }
}




// const QuestionSchema = require('../modals/QuestionSchema');

// const searchQuestion = async (req, res) => {
//     try {
//         const { title = "", page = 1, limit = 20 } = req.query; // Default title to an empty string to avoid errors
//         const regex = new RegExp(title, 'i'); // Case-insensitive regex for matching titles

//         // Using MongoDB aggregation pipeline for better performance and flexibility
//         const questions = await QuestionSchema.aggregate([
//             { 
//                 $match: { 
//                     title: { $regex: regex } // Match titles using regex
//                 } 
//             },
//             {
//                 $addFields: {
//                     startsWithQuery: {
//                         $cond: [
//                             // Check if the title starts with the query (case-insensitive)
//                             { $eq: [ { $substr: ["$title", 0, title.length] }, title ] },
//                             1, // Priority for titles starting with the query
//                             2  // Lower priority for other matches
//                         ]
//                     }
//                 }
//             },
//             { 
//                 $sort: { startsWithQuery: 1, title: 1 } // Sort using the custom field and alphabetically
//             },
//             { 
//                 $skip: (page - 1) * limit // Skip documents for pagination
//             },
//             { 
//                 $limit: Number(limit) // Limit the number of results per page
//             }
//         ]).allowDiskUse(true); // Enable disk use for sorting if needed

//         const totalItems = await QuestionSchema.countDocuments({ title: { $regex: regex } }); // Count total items matching the query

//         // Respond with the paginated results and metadata
//         res.json({
//             success: true,
//             page: Number(page),
//             totalPages: Math.ceil(totalItems / limit),
//             totalItems,
//             questions,
//         });
//     } catch (error) {
//         console.error('Error in searchQuestion: ', error); // Log errors to debug
//         res.status(500).json({ success: false, message: error.message }); // Send error response
//     }
// };

const findTypeOFQuestion = async(req,res)=>{
    try{
        const type = await QuestionSchema.find({});
        if(!type){
            return res.status(404).json({ success: false, message: 'No questions found'});
        }
        res.json({ success: true, type });
    }catch(error){
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    searchQuestion,
    findTypeOFQuestion
};
