const request = require('request');

const url = 'https://mygeoangelfirespace.city/db/css_votes.json';
const options = {json: true};

const homepage = (client, channel) => {
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

            const [ContestantName, voteCount] = Object.keys(voteCounts)
                .map((contestantName) => [contestantName, voteCounts[contestantName]])
                .reduce(
                    (
                        [ContestantName, voteCount],
                        [contestantName, voteCount]
                    ) => {
                        if (voteCount < voteCount) {
                            return [contestantName, voteCount];
                        } else {
                            return [ContestantName, voteCount];
                        }
                    },
                    ['nobody', 0]
                );

            client.say(
                channel,
                `${ContestantName} owns the homepage with ${voteCount} votes
                !css <link to custom css to update your css>`
            );
        }
    });
};

module.exports = feature;
