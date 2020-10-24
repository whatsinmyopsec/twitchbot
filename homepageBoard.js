const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://mygeoangelfirespace.city/';

const cssTop = (client, channel) => {
rp(url)
  .then(function(html){
    //success!
      let n = $('a', html)[4].children[0].data;
      let sArray = n.split(" ");
      let winner = sArray[3]
      let output = `The homepage is owned by ${winner}`   
      client.say(channel, output);
    }
  )
  .catch(function(err){
    //handle error
  });
};
module.exports = cssTop;
