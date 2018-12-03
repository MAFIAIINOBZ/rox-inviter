const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("Shring Bot By, HeyIm7s7s - iiNoBz ");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** 
السلام عليكم السيرفر حماس فيه كل شيء أدخل
السيرفر جديد لهاذا التفاعل صغير أنشره علشان التفاعل يزيد  
                               [ https://discord.gg/cZBJqgu ] 
 السيرفر حلوأنشره  :heart: :heart: :heart:  
Hey thier 
                               الرابط لك حياك : ... [ ${member}  ]
----------------------------------------------------------------------
Peace be upon you server where everything is entered
The server is new to this small interface, so I publish it because the interaction increases
                                [ https://discord.gg/cZBJqgu ]
  If You Love The Serevr Shring Is : heart: heart: heart:
                            Link to you Welcome : ... 
**`)
}).catch(console.error)
})
A7MD.login("BOT_TOKEN");