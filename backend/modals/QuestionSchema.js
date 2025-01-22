const mongoose = require('mongoose');

const AnotherQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
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
    required: true
  },
  isCorrectAnswer: {
    type: Boolean
  },
});

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  anagramType: {
    type: String,
    required: true
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
  },
  solution: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Question', QuestionSchema);

