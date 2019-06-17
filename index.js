const Botkit = require("botkit");
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

console.log("had a token")

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.token
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

// hello world
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'hello world');
});

controller.hears('request',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'yes');
});