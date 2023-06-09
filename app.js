const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./src/routes/homeRoutes');
const inforegisterRoutes = require('./src/routes/inforegisterRoutes');
const infoquizRoutes = require('./src/routes/infoquizRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const questionsRoutes = require('./src/routes/questionsRoutes');
const reportRoutes = require('./src/routes/reportRoutes');

const app = express();
const port = 80;

// Set views directory and view engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', homeRoutes);
app.use('/home', homeRoutes);
app.use('/homepage', homeRoutes);
app.use('/inforegister', inforegisterRoutes);
app.use('/infoquiz', infoquizRoutes);
app.use('/register', registerRoutes);
app.use('/questions', questionsRoutes);
app.use('/report', reportRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
