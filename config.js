const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_42_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldQVXBnSHZEWkJOL2V5cC8rU25DWnBudk9uV3VNclU4NUhNbHRrWlN6VWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAyMjM0MTI5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTU5QzA2QjgyRjczQTQwNEQxRUQzNzcxRUQ4M0QzNkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTcyMTM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImx1ZEI5Q3hvUjJtRTNaaWFNbW9iQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODg4YjljYjMtOGUyYi00NWJmLWE0N2UtNDU2Mzk4YzJjNzYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDQ4LFxuICAgICAgMTU3LFxuICAgICAgNTMsXG4gICAgICA5LFxuICAgICAgOTEsXG4gICAgICA2NixcbiAgICAgIDI0MixcbiAgICAgIDE3LFxuICAgICAgMjksXG4gICAgICA3OCxcbiAgICAgIDIzLFxuICAgICAgMjA5LFxuICAgICAgMTI3LFxuICAgICAgMjUsXG4gICAgICAxMDksXG4gICAgICA5MCxcbiAgICAgIDk4LFxuICAgICAgMTIwLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDIwNSxcbiAgICAgIDUzLFxuICAgICAgMTk3LFxuICAgICAgMjEyLFxuICAgICAgMTgxLFxuICAgICAgMTU2LFxuICAgICAgMTU3LFxuICAgICAgOTQsXG4gICAgICAxNDMsXG4gICAgICAxODgsXG4gICAgICAxNzcsXG4gICAgICAxMTEsXG4gICAgICAxMjUsXG4gICAgICAyMjksXG4gICAgICA3NCxcbiAgICAgIDUzLFxuICAgICAgMTcxLFxuICAgICAgMjMwLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdBQzlURjZBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIyMzQxMjk5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzYWRpeWFkYWhpcnUyMDI1XCIsXG4gICAgXCJsaWRcIjogXCI4NTQ3NTM4NTc1Mzk5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUc5KzU4RkVPR2xwcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJERHNKOU1zRWtZL1pldlgxKzAzZXhIclQrcG1iaFBQZXRBQ01MaS9XeVhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldsSHlnbWlaci9qUktjRGVGY1JRand5SElwb21yWXgvdlNOQThxVlFKOTZ0TXlSU2t4NFRoQTZ6UDZkamFiN2dGS0Jya2UzaDRRbWF0eTU3aUxGQkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZ5VDZZbmhPcllIVUpxalU1MDJGR3V5U2pSaVhLeUVROVlVdjU4NVZ1S0NjSGVnc0ZMWlAzVjIyeHlOdkJidStOZE1CcHRVWEoxbzFmUlFFV1Z4MmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjIzNDEyOTk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5NzIxMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKc3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpzeS5qc29uIjogIntcImtleURhdGFcIjpcImdXUnJDTXh3eXpFLzNSb3Fsend2dzhEWk5XaGxSd29OdWtqMXJMWUh0a2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwOTIxMjAzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0OTcxNzk3MjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
