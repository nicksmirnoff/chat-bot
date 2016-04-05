import { Meteor } from 'meteor/meteor';
import TelegramBot from 'node-telegram-bot-api';

Meteor.startup(() => {
	console.log("".indexOf('photo'));
});
	
var token = '181370059:AAGvMvOZ-AP_OInDNErKMvs3tfytt0R74_Q';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
	 console.log(msg);
    var chatId = msg.chat.id;
   if(msg.text.indexOf('photo') >= 0 ) {
	    bot.sendMessage(chatId, "no photo");
   } else {
	   bot.sendMessage(chatId, "");
   }
});

