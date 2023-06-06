const express = require('express');
const router = express.Router();

// Questions route
router.get('/', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('./layouts/infoquiz.ejs', { title: 'Questions' });
});

// Questions route
router.get('/info', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('./layouts/infoquiz.ejs', { title: 'Questions', body: 'info register Content' });
});


// Questions route
router.get('/enviro', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('./layouts/enviro.ejs', { title: 'Questions' });
});

// Questions route
router.get('/social', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('./layouts/social.ejs', { title: 'Questions' });
});


// Questions route
router.get('/governance', (req, res) => {
  // Retrieve and render the list of questions
  // Assuming the questions are available in an array called 'questions'
  
  res.render('./layouts/governance.ejs', { title: 'Questions' });
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
