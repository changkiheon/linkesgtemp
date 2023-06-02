exports.getHomePage = (req, res) => {
    console.log('controller home');
    // Render the about page
    res.render('home', { pageTitle: 'Home' });
  };
  