const request = require("request");

let url = "https://beginworld.exchange/db/rap_sheet.json";

let options = { json: true };

const feature = (client, channel) => {
  request(url, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      const crimeCounts = Object.values(body.rap_sheet)
        .map(crime => crime.user)
        .reduce((crimeCounts, criminalName) => {
          const crimeCount = crimeCounts[criminalName] ? crimeCounts[criminalName] + 1 : 1;
          return Object.assign(crimeCounts, {[criminalName]: crimeCount})
        }, {});

      const [worstCriminalName, worstCrimeCount] = Object.keys(crimeCounts)
        .map(criminalName => [criminalName, crimeCounts[criminalName]])
        .reduce(([worstCriminalName, worstCrimeCount], [criminalName, crimeCount]) => {
          if (worstCrimeCount < crimeCount) {
            return [criminalName, crimeCount]
          } else {
            return [worstCriminalName, worstCrimeCount]
          }
        }, ['nobody', 0]);

      client.say(channel, `User: ${worstCriminalName} with ${worstCrimeCount} crimes`);
    }
  });
};

module.exports = feature;
