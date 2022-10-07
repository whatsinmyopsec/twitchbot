const request = require('request');

const url = 'https://beginworld.exchange/db/rap_sheet.json';
const options = {json: true};

const feature = (client, channel) => {
    request(url, options, (error, res, body) => {
        if (error) {
            return console.log(error);
        }

        if (!error && res.statusCode === 200) {
            const offenceCounts = Object.values(body.rap_sheet)
                .map((offence) => offence.user)
                .reduce((offenceCounts, offenderName) => {
                    const offenceCount = offenceCounts[offenderName]
                        ? offenceCounts[offenderName] + 1
                        : 1;
                    return Object.assign(offenceCounts, {[offenderName]: offenceCount});
                }, {});

            const [worstOffenderName, worstOffenceCount] = Object.keys(offenceCounts)
                .map((offenderName) => [offenderName, offenceCounts[offenderName]])
                .reduce(
                    (
                        [worstOffenderName, worstOffenceCount],
                        [offenderName, offenceCount]
                    ) => {
                        if (worstOffenceCount < offenceCount) {
                            return [offenderName, offenceCount];
                        } else {
                            return [worstOffenderName, worstOffenceCount];
                        }
                    },
                    ['nobody', 0]
                );

            client.say(
                channel,
                `Biggest Offender User: ${worstOffenderlName} with ${worstOffenceCount} offences`
            );
        }
    });
};

module.exports = feature;
