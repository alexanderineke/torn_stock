const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const stocks = [];
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if(message.content == "!stocks") {
     //message.channel.send('heard');
      axios
      .get('https://yata.yt/api/v1/travel/export')
        .then(res => {
            for(var stock in res.data.stocks) {
              var b = stock +': \n';
              for(var stock2 in res.data.stocks[stock].stocks) {
                var a = res.data.stocks[stock].stocks[stock2];
                if((a.name.includes('Plushie'))) {
                 
                if(a.quantity != 0){
                  b = b+ a.name + ': ' + a.quantity + '\n';
                }}
              }
              if (b!=stock +': \n'){
              message.channel.send(b);
              }
            }
        })
        .catch(error => {
          console.error(error);
      });
    
  }
});
const mySecret = "OTczNTY3NTA5MDU3OTI1MTcw.GV-9GH.1D7inTqfQfqcCo6dL_mRBLmieJt_onDm5lm8Ig";
client.login(mySecret);