const express = require('express');
const router = express.Router();
const useragent = require('useragent');
const TAB = "\t";

// Home route
router.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];
  const agent = useragent.parse(userAgent);
  
  console.log('User Agent:', agent.toString());
  console.log(Date() + TAB + req.socket.localAddress + TAB + req.ip + TAB + req.url);

  res.render('layouts/infoquiz.ejs', { title: 'info register', body: 'info register Content'});
});


module.exports = router;
