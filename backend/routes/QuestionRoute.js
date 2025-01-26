const express = require('express');
const router = express.Router();
const insertAllQuestions = require('../InsertQuestion/InsertQuestion');
const { searchQuestion } = require('../controllers/questionSearchController');


router.post('/insertQuestions', insertAllQuestions);
router.get('/find', searchQuestion);
module.exports = router;  