var express = require('express');
var router = express.Router();
var usernames = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat application'});
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  res.render('chat', { name: req.body.username, list: usernames}); 
  usernames.push(username);
  
});

router.post('/disconnect', function(req,res,next){
		var username = req.body.user;
		
		for(var i=0; i< usernames.length; i++){
			if(usernames[i] == username)
				usernames.splice(i,1);
				break;
		}
		
	
	res.render('disconnect', {message: 'You have been logged out'});
});

router.post('/users', function(req, res, next){
	res.render('list', {list: usernames});
});

module.exports = router;
