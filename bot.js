let client = require("./client");
const feature = require("./criminal");
//const screenoled = require("./screen");
let readline = require("readline");
const cc = require("cli-color");
const keep_alive = require('./keep_alive.js');
const sudo = require('./sudo');
let mechannel = "";
client.connect();

const me = "whatsinmyopsec";
client.on("message", (channel, tags, message, self, vips) => {
	mechannel = channel;
	var { username, mod } = tags;
	if(tags = mod){
	console.log(cc.red(`${username}:`) + cc.white(` ${message}`));
	}
  else if (username === me){
    console.log(cc.yellow(`${username}:`) + cc.white(` ${message}`));
  }
	else
	{
	console.log(cc.green(`${username}:`) + cc.white(` ${message}`));
	}
  

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
	if (message.includes("LUL")) {
		client.say(channel, `LUL LUL LUL`);
	}
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
  if (message.includes("!!sudo getinfo")){
    sudo(client, channel, message);
  }
	
});

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (input) => {
	client.say(mechannel, input);
});
