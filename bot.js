let client = require("./client");
const feature = require("./feature");
let readline = require("readline");
const cc = require("cli-color");
let mechannel = "";
client.connect();

const me = "whatsinmyopsec";
client.on("message", (channel, tags, message, self, vips) => {
  mechannel = channel;
  var { username, mod } = tags;
  console.log(cc.green(`${username}:`) + cc.white(` ${message}`));

  if (self) return;
  if (message === "CoolCat CoolCat CoolCat" && username === "beginbotbot") {
    client.say(channel, `!props`);
  }
  if (message === "!!p" && username === me) {
    client.say(channel, `!props`);
  }
  if (message.toLowerCase() === "!!d" && username === me) {
    client.say(channel, `!donate @${username}`);
  }
  if (message.toLowerCase() === "!me" && username === me) {
    client.say(channel, `!me`);
  }
  // if (message.toLowerCase() === "!!c" && username === me) {
  //   client.say(channel, `beginbCube beginbCube beginbCube`);
  // }
  // if (message === "beginbCube") {
  //   client.say(channel, `beginbCube beginbCube beginbCube`);
  // }
  // if (message.toLowerCase() === "!!veyes" && username === me) {
  //   client.say(channel, `beginbVimeyes beginbVimeyes beginbVimeyes`);
  // }
  // if (message.toLowerCase() === "!!this" && username === me) {
  //   client.say(channel, `beginbThis beginbThis beginbThis`);
  // }
  // if (message.includes("beginbVimeyes")) {
  //   client.say(channel, `beginbVimeyes beginbVimeyes beginbVimeyes`);
  // }
  // if (message.includes("beginbThis")) {
  //   client.say(channel, `beginbThis beginbThis beginbThis`);
  // }
  if (message.includes("LUL")) {
    client.say(channel, `LUL LUL LUL`);
  }
  // if (message.includes("beginbBill")) {
  //   client.say(channel, `beginbBill beginbBill beginbBill`);
  // }
  if (message.includes("!!manifesto" && username === "beginbot")) {
    client.say(
      channel,
      `@${username} I steal to become most wealthy you could say I'm like a reverse robinhood`
    );
  }
  if (message === "!manifesto opsecbot" && username === "beginbobot") {
    client.say(
      channel,
      `@${username} I steal to become most wealthy you could say I'm like a reverse robinhood`
    );
  }
  if (message.includes("is a parrot")) {
    client.say(channel, `I'm not a parrot ${username}`);
  }
  if (message.includes("not a parrot")) {
    client.say(channel, `I know I'm not a parrot ${username}`);
  }
  if (message.includes("!!brother") && username === me) {
    client.say(
      channel,
      `⣿⠄⡇⢸⣟⠄⠁⢸⡽⠖⠛⠈⡉⣉⠉⠋⣁⢘⠉⢉⠛⡿⢿⣿⣿⣿⣿⣿⣿⣿ ⣷⣶⣷⣤⠄⣠⠖⠁⠄⠂⠁⠄⠄⠉⠄⠄⠎⠄⠠⠎⢐⠄⢑⣛⠻⣿⣿⣿⣿⣿ ⣿⣿⣿⠓⠨⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠐⠅⠄⠉⠄⠗⠆⣸⣿⣿⣿⣿⣿ ⣿⣿⣿⡣⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣤⣦⠄⠄⠄⠄⠄⠄⠄⡀⡙⣿⣿⣿⣿ ⣿⣿⡛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠔⠿⡿⠿⠒⠄⠠⢤⡀⡀⠄⠁⠄⢻⣿⣿⣿ ⣿⣿⠄⠄⠄⠄⠄⠄⣠⡖⠄⠁⠁⠄⠄⠄⠄⠄⠄⠄⣽⠟⡖⠄⠄⠄⣼⣿⣿⣿ ⣿⣿⠄⠄⠄⠄⠄⠄⢠⣠⣀⠄⠄⠄⠄⢀⣾⣧⠄⠂⠸⣈⡏⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⡞⠄⠄⠄⠄⠄⢸⣿⣶⣶⣶⣶⣶⡿⢻⡿⣻⣶⣿⣿⡇⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⡷⡂⠄⠄⠁⠄⠸⣿⣿⣿⣿⣿⠟⠛⠉⠉⠙⠛⢿⣿⡇⠄⠄⢀⣿⣿⣿⣿ ⣶⣶⠃⠄⠄⠄⠄⠄⠄⣾⣿⣿⡿⠁⣀⣀⣤⣤⣤⣄⢈⣿⡇⠄⠄⢸⣿⣿⣿⣿ ⣿⣯⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣷⣶⣿⣿⣥⣬⣿⣿⣟⣿⠃⠄⠨⠺⢿⣿⣿⣿ ⠱⠂⠄⠄⠄⠄⠄⠄⠄⣬⣸⡝⠿⢿⣿⡿⣿⠻⠟⠻⢫⡁⠄⠄⠄⡐⣾⣿⣿⣿ ⡜⠄⠄⠄⠄⠄⠆⡐⡇⢿⣽⣻⣷⣦⣧⡀⡀⠄⠄⣴⣺⡇⠄⠁⠄⢣⣿⣿⣿⣿ ⠡⠱⠄⠄⠡⠄⢠⣷⠆⢸⣿⣿⣿⣿⣿⣿⣷⣿⣾⣿⣿⡇⠄⠄⠠⠁⠿⣿⣿⣿ ⢀⣲⣧⣷⣿⢂⣄⡉⠄⠘⠿⣿⣿⣿⡟⣻⣯⠿⠟⠋⠉⢰⢦⠄⠊⢾⣷⣮⣽⣛`
    );
  }
  if (message.includes("!!worst_criminal")) {
    feature(client, channel);
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  client.say(mechannel, input);
});
