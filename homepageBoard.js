const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://mygeoangelfirespace.city/';

const cssTop = (client, channel) => {
rp(url)
  .then(function(html){
    //success!
    for (let i = 4; i < 5; i++) {
      let n = $('a', html)[i].children[0].data;
      let sArray = n.split(" ");
      let winner = sArray[3]
      let output = `The homepage is owned by ${winner}`
            
      client.say(channel, output);
      client.say(channel, `To vote for a different homepage do !bestcss @name`)
    }
  })
  .catch(function(err){
    //handle error
  });
};
module.exports = cssTop;
