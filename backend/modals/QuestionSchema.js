const mongoose = require('mongoose');

const AnotherQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  showInOption: {
    type: Boolean
  },
  isAnswer: {
    type: Boolean
  },
});


const McqQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  isCorrectAnswer: {
    type: Boolean
  },
});

const QuestionSchema = new mongoose.Schema({
  _id:{
    
    type: mongoose.Schema.Types.ObjectId,
    required: true
    
  },
  type: {
    type: String,
  },
  anagramType: {
    type: String,
  },
  blocks: {
    type: [AnotherQuestionSchema],
    default: [],
  },
  options: {
    type: [McqQuestionSchema],
    default: [],
  },
  siblingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question', 
    default: null,
  },
  solution: {
    type: String,
  },
  title: {
    type: String,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);

