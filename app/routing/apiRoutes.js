var friendsData = require("../data/friends.js");
console.log(friendsData);
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
        console.log('retrieving freinds!');
        res.json(friendsData);
	});
	app.post('/api/friends', function(req, res) {
        console.log('saving a new friend!!!');
        friendsData.push(req.body);
        console.log(friendsData);
        res.json(friendsData);
        friendsData.push(req.body);
        var friend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };

        console.log(friend);
    });

    // app.post('/api/clear', function() {
    //     friendsData = [];
    //     console.log(friendsData);
    // });
}
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// You should save your application's data inside of app/data/friends.js as an array of objects.

//Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.