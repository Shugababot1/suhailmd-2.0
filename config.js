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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349124503464";




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


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 

SUHAIL_15_15_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcb
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
