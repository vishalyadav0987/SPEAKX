const QuestionSchema = require('../modals/QuestionSchema');

const searchQuestion = async (req, res) => {
    try {
        const { title, page = 1, limit = 20 } = req.query;

       const regex = new RegExp(title, 'i'); 

        const questions = await QuestionSchema.aggregate([
            { $match: { title: { $regex: regex } } },
            // {
            //     $addFields: {
            //         startsWithQuery: {
            //             $cond: [
            //                 { $regexMatch: { input: "$title", regex: `^${title}`, options: "i" } },
            //                 1, 
            //                 2  
            //             ]
            //         }
            //     }
            // },
            // { $sort: { startsWithQuery: 1, title: 1 } },
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

module.exports = {
    searchQuestion
}