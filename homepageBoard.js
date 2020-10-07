const request = require('request');

const url = 'https://mygeoangelfirespace.city/db/css_votes.json';
const options = {json: true};

const cssTop = (client, channel) => {
    request(url, options, (error, res, body) => {
        if (error) {
            return console.log(error);
        }

        if (!error && res.statusCode === 200) {
            const voteCounts = Object.values(body.css_votes)
                .map((contestants) => contestants.candidate)
                .reduce((voteCounts, contestantName) => {
                    const voteCount = voteCounts[contestantName]
                        ? voteCounts[contestantName] + 1
                        : 1;
                    return Object.assign(voteCounts, {[contestantName]: voteCount});
                }, {});

            const [bestContestantName, bestVoteCount] = Object.keys(voteCounts)
                .map((contestantName) => [contestantName, voteCounts[contestantName]])
                .reduce(
                    (
                        [bestContestantName, bestVoteCount],
                        [contestantName, voteCount]
                    ) => {
                        if (bestVoteCount < voteCount) {
                            return [contestantName, voteCount];
                        } else {
                            return [bestContestantName, bestVoteCount];
                        }
                    },
                    ['nobody', 0]
                );

            client.say(
                channel,
                `${bestContestantName} owns the homepage with ${bestVoteCount} votes`
            );
        }
        client.say(channel, `!bestcss @user to change this`)
    });
};

module.exports = cssTop;
