const express = require('express');
const router = express.Router();

// Questions route
router.get('/', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('questions', { title: 'Questions', questions });
});

router.post('/', (req, res) => {
  // Process the submitted question form data
  // Assuming form data is available in req.body
  
  // Example: Saving the question to the database
  const { question } = req.body;
  // Code to save the question to the database goes here
  
  res.redirect('/questions');
});

module.exports = router;
