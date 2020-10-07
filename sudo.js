const sudo = (client, channel, message) => {
    let strings = message.split(" ");
    if (strings.length < 3) {
        client.say(channel, `To use this command please say !!sudo getinfo name`);
    } else if (strings.length === 3) {
        let requestedUser = strings[2];
        let val = `!!getinfo ${requestedUser}`;
        client.say(channel, val);
    }
};

module.exports = sudo;
