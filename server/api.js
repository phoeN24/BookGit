// handles requests to api and posts to src
const express = require('express');

const {searchController, userController} = require('./controllers');

const router = express.Router();


fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "goodreads-books.p.rapidapi.com",
		"x-rapidapi-key": "686d565d1dmsh6891100fdb72b8fp1a2587jsn413a6e220354"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

router.get('/*',
searchController.getAuthor,
(req,res) => res.status(200).json()
.then(console.log(req.body))
)
module.exports = router;


// req.query -> {user_name: Me, password: 1234, sweaterTemp: 11}
// /user/?user_name=Me&password=1234&sweaterTemp=11
// 3000/api/?author_name=Tolkien