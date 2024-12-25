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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_04_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJERzBSWTU2VkhKeFEzV09JZGd5bVliMFdUL1V1WEp6MkQ5amF3a2J1MGZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjIzNDEyOTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4MDE2NzYxN0Y2NzJGMkQ4QjQ0QTlBMkZBQ0VFMjJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTEzOTA2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1TGhRS0pfRVNDaXR5aUpsazJmU0V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmZTJiNDI4LWYwN2YtNDVkZC04MTNjLTI2Nzc1M2Q2ZDRmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDEsXG4gICAgICAxNjksXG4gICAgICAzNSxcbiAgICAgIDg0LFxuICAgICAgMTY0LFxuICAgICAgMjMsXG4gICAgICAyMTQsXG4gICAgICAyMzcsXG4gICAgICAxMzEsXG4gICAgICAxOTksXG4gICAgICA1MixcbiAgICAgIDI1MixcbiAgICAgIDEwMixcbiAgICAgIDEzMixcbiAgICAgIDcxLFxuICAgICAgNjIsXG4gICAgICAyNDcsXG4gICAgICAzNCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxODEsXG4gICAgICA1NixcbiAgICAgIDM2LFxuICAgICAgMTUyLFxuICAgICAgMjI4LFxuICAgICAgMTI5LFxuICAgICAgNDMsXG4gICAgICAyMzUsXG4gICAgICAxMzEsXG4gICAgICA0MixcbiAgICAgIDIyOSxcbiAgICAgIDE1OCxcbiAgICAgIDExMCxcbiAgICAgIDEyOSxcbiAgICAgIDE3MSxcbiAgICAgIDIxMixcbiAgICAgIDIxMSxcbiAgICAgIDUwLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFHMTJHTTZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIyMzQxMjk5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2FkaXlhZGFoaXJ1MjAyNVwiLFxuICAgIFwibGlkXCI6IFwiODU0NzUzODU3NTM5OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJSzkrNThGRU9tOXNMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkREc0o5TXNFa1kvWmV2WDErMDNleEhyVCtwbWJoUFBldEFDTUxpL1d5WEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUlhqMyt4YzlmcXlpNTRFcDh6WURpVmRURXhuMnJ2Y3NqS3gxcGhDRVZ2OXV3alRLdW9TUFNZUU1NTk9EdWMxNnY2N0pkaG5XNGFuZDJnSXM0RlkxQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHFLdmVLN2xTa1NFSTZsS3UwNWNrWTVuQ0ZyQXQybFF3THMvSVBLRTRZVlRYNHFvdVg4dllGYTdkWDZhNEd0Vjgvamx2TjR0cTlzeXp5TnhlVmUwQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyMjM0MTI5OToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUxMzkwNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKc3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpzei5qc29uIjogIntcImtleURhdGFcIjpcIi9LK1BJaDhsN1BhcVNsOVhUYjc3cGVRcy8zT2ZDNHlTM1RLRG5ucE1wZk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwOTIxMjAzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
