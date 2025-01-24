const fs = require('fs');
const zlib = require('zlib');
const QuestionSchema = require('../modals/QuestionSchema');
const mongoose = require('mongoose');

const questionCompressedData = '/Users/vishalyadav/Desktop/SpeakX/backend/config/compressed_speakx_questions.json.gz';

const insertAllQuestions = async (req, res) => {
    try {
        fs.readFile(questionCompressedData, (error, compressedData) => {
            if (error) {
                console.error('Error in reading compressed file:', error.message);
                return res.status(500).json({ success: false, message: error.message });
            }

            zlib.gunzip(compressedData, async (error, decompressedData) => {
                if (error) {
                    console.error('Error in decompressing data:', error.message);
                    return res.status(500).json({ success: false, message: error.message });
                }

                const QuestionData = JSON.parse(decompressedData.toString());

                try {
                    QuestionData.forEach((question) => {
                        if (question._id) {
                            question._id = new mongoose.Types.ObjectId(question._id.$oid);
                        }
                        if (question.siblingId) {
                            question.siblingId = new mongoose.Types.ObjectId(question.siblingId.$oid);
                        }
                    });
                    const questions = await QuestionSchema.insertMany(QuestionData);
                    res.status(200).json({
                        success: true,
                        message: 'Questions inserted successfully',
                        data: questions,
                    });
                } catch (error) {
                    console.log('Error in inserting questions:', error.message);
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error during insert operation:', error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = insertAllQuestions;
