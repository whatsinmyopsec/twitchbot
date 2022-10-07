let client = require('./client');
const feature = require('./criminal');
const readline = require('readline');
const chalk = require('chalk');
const sudo = require('./sudo');
const cssTop = require('./homepageBoard');
const time = require('./time');
const random = require('./random');
const keep_alive = require('./keep_alive.js');


let mechannel = '';
client.connect();

const me = 'whatsinmyopsec';

client.on('message', (channel, tags, message, self) => {
    mechannel = channel;
    let {username, mod} = tags;
    if (tags === mod) {
        console.log(chalk.red(`${username}:`) + chalk.white(` ${message}`));
    } else if (username === me) {
        console.log(chalk.yellow(`${username}:`) + chalk.white(` ${message}`));
    } else {
        console.log(chalk.green(`${username}:`) + chalk.white(` ${message}`));
    }


    if (self) return;
    /*if (message === 'GlitchCat CoolCat CoolCat GlitchCat Mana Replenished GlitchCat CoolCat CoolCat GlitchCat' && username === 'beginbotbot') {
        time(random(4000,9699))
        client.say(channel, `!props`);
    }*/
    if (message === '!!p' && username === me) {
        client.say(channel, `!props all`);
    }
    if (message.toLowerCase() === '!!d' && username === me) {
        client.say(channel, `!donate @${username}`);
    }
    if (message.toLowerCase() === '!me' && username === me) {
        client.say(channel, `!me`);
    }
    if (message.includes('LUL')) {
      time(random(1337,42069))
        client.say(channel, `LUL LUL LUL`);
    }
    if (message === '!!manifesto' && username === 'beginbot') {
        client.say(
            channel,
            `@${username} I steal to become most wealthy you could say I'm like a reverse robinhood`
        );
    }
    if (message === '!manifesto opsecbot' && username === 'beginbobot') {
        client.say(
            channel,
            `@${username} I steal to become most wealthy you could say I'm like a reverse robinhood`
        );
    }
    if (message.includes('is a parrot')) {
        client.say(channel, `I'm not a parrot ${username}`);
    }
    if (message.includes('not a parrot')) {
      time(random(690,4020))
        client.say(channel, `I know I'm not a parrot ${username}`);
    }
    if (message === '!!brother') {
      time(random(3000,9000))
        client.say(
            channel,
            `⣿⠄⡇⢸⣟⠄⠁⢸⡽⠖⠛⠈⡉⣉⠉⠋⣁⢘⠉⢉⠛⡿⢿⣿⣿⣿⣿⣿⣿⣿ ⣷⣶⣷⣤⠄⣠⠖⠁⠄⠂⠁⠄⠄⠉⠄⠄⠎⠄⠠⠎⢐⠄⢑⣛⠻⣿⣿⣿⣿⣿ ⣿⣿⣿⠓⠨⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠐⠅⠄⠉⠄⠗⠆⣸⣿⣿⣿⣿⣿ ⣿⣿⣿⡣⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣤⣦⠄⠄⠄⠄⠄⠄⠄⡀⡙⣿⣿⣿⣿ ⣿⣿⡛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠔⠿⡿⠿⠒⠄⠠⢤⡀⡀⠄⠁⠄⢻⣿⣿⣿ ⣿⣿⠄⠄⠄⠄⠄⠄⣠⡖⠄⠁⠁⠄⠄⠄⠄⠄⠄⠄⣽⠟⡖⠄⠄⠄⣼⣿⣿⣿ ⣿⣿⠄⠄⠄⠄⠄⠄⢠⣠⣀⠄⠄⠄⠄⢀⣾⣧⠄⠂⠸⣈⡏⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⡞⠄⠄⠄⠄⠄⢸⣿⣶⣶⣶⣶⣶⡿⢻⡿⣻⣶⣿⣿⡇⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⡷⡂⠄⠄⠁⠄⠸⣿⣿⣿⣿⣿⠟⠛⠉⠉⠙⠛⢿⣿⡇⠄⠄⢀⣿⣿⣿⣿ ⣶⣶⠃⠄⠄⠄⠄⠄⠄⣾⣿⣿⡿⠁⣀⣀⣤⣤⣤⣄⢈⣿⡇⠄⠄⢸⣿⣿⣿⣿ ⣿⣯⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣷⣶⣿⣿⣥⣬⣿⣿⣟⣿⠃⠄⠨⠺⢿⣿⣿⣿ ⠱⠂⠄⠄⠄⠄⠄⠄⠄⣬⣸⡝⠿⢿⣿⡿⣿⠻⠟⠻⢫⡁⠄⠄⠄⡐⣾⣿⣿⣿ ⡜⠄⠄⠄⠄⠄⠆⡐⡇⢿⣽⣻⣷⣦⣧⡀⡀⠄⠄⣴⣺⡇⠄⠁⠄⢣⣿⣿⣿⣿ ⠡⠱⠄⠄⠡⠄⢠⣷⠆⢸⣿⣿⣿⣿⣿⣿⣷⣿⣾⣿⣿⡇⠄⠄⠠⠁⠿⣿⣿⣿ ⢀⣲⣧⣷⣿⢂⣄⡉⠄⠘⠿⣿⣿⣿⡟⣻⣯⠿⠟⠋⠉⢰⢦⠄⠊⢾⣷⣮⣽⣛`
        );
    }
    if (message === '!!program') {
        client.say(channel,`https://www.twitch.tv/sungym`);
    }
    if (message === '!!worst_criminal') {
        feature(client, channel);
    }
    if (message === '!!cssTop') {
        cssTop(client, channel);
    }
    if (message === '!!sudo getinfo') {
        sudo(client, channel, message);
    }

});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    client.say(mechannel, input);
});
