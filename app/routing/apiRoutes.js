var _ = require("lodash");
var friendsData = require("../data/friends.js");
console.log(friendsData);
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log('retrieving freinds!');
        res.json(friendsData);
    });
    app.post('/api/friends', function (req, res) {
        var scores = req.body.scores;
        var compareScores = [];
        friendsData.forEach(function (friend) {
            var friendScore = 0;
            friend.scores.forEach(function (score, num) {
                friendScore = friendScore + Math.abs(score - parseInt(scores[num]));
            });
            
            compareScores.push({
                "friend": friend,
                "score": friendScore
            });
        });
        res.json(_.sortBy(compareScores, "score").shift());
    });
  };