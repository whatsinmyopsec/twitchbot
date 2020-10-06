const sudo = (client,channel,message) => {
  var strings = message.split(" ")
  if(strings.length < 3){
    client.say(channel, `To use this command please say !!sudo getinfo name`);
    }
  else if (strings.length === 3){
    var requestedUser = strings[2]
    var val = `!!getinfo ${requestedUser}`
    client.say(channel,val);
    }    
}

module.exports = sudo;