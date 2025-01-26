const express = require('express');
const router = express.Router();
const insertAllQuestions = require('../InsertQuestion/InsertQuestion');
const { searchQuestion, findTypeOFQuestion } = require('../controllers/questionSearchController');


router.post('/insertQuestions', insertAllQuestions);
router.get('/find', searchQuestion);
router.get('/all-type', findTypeOFQuestion);
module.exports = router;  