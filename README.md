
# Twitch bot  
[![Run on Repl.it](https://repl.it/badge/github/whatsinmyopsec/twitchbot)](https://repl.it/github/whatsinmyopsec/twitchbot)  
<img src="https://badges.pufler.dev/visits/whatsinmyopsec/twitchbot">  
  
  This is a Twitch bot for [twitch.tv/beginbot](https://twitch.tv/beginbot). If you have any Questions regarding this Project feel free to ask.
  You found a Bug? Please create an Issue.
  
---  

Little guide on how to make it work.

1. Run this command `cp .env.example .env` or by simple rename that `.env.example` to `.env`
  
2. Go to the api [tmi twitch site](https://twitchapps.com/tmi/).

3. Copy your Bot OAuth Token from twitch tmi [website](https://twitchapps.com/tmi/) and paste it into the "**Password**" variable.

### Example:
```md  
USERNAME="Botname"  
PASSWORD="OAuth Token"  
CHANNEL0="Twitch channel name 1"  
CHANNEL1="Twitch channel name 2"
```  
  
4. Make sure to install **npm** with these Commands:
```
npm i
npm run build
```
---
### Gratz!
The Bot is now ready to run.

### Features wanted
---
To add a feature clone my repo and make a new branch `git -b feature`

Try to follow how I have structured the project as a new feature is in its own file then called in `bot.js`

