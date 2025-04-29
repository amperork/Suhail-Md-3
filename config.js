const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || ""; // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email = "xxxx@gmail.com";
global.location = "Paris,France.";

global.mongodb = process.env.MONGODB_URI || "false";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "false";

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github =
  process.env.GITHUB || "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" ||
  "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg"; // SET LOGO FOR IMAGE
global.caption = process.env.CAPTION || global.caption || "FEAR";

global.devs = ""; // Developer Contacts
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "";

//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE || Math.floor(Math.random() * 6) || "0"; // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false";
global.wlcm =
  process.env.WELCOME ||
  process.env.CAN_WELCOME ||
  Math.floor(Math.random() * 3) === 1
    ? "false"
    : "false"; // Make it "false" for disable WELCOME

global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"), // disable bot in groups when public mode
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "false"); // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages = process.env.USER_IMAGES || ""; //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence = process.env.WAPRESENCE || "null"; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null,923xxxxxxxx";
global.read_status_from =
  process.env.READ_STATUS_FROM || "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/"; //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_20_08_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzb08wdTdRSy8xU2xjZ1ZHUGV2Ulp2bDBsNVI5UDEzTTNzWnlobDk2TkI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQTzdSOXJydFNHeUlNTXdHUmZ0WXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljZTFmYzE0LWYyMTYtNGMzYS1hNWUwLTAxOTY5MjlmYjk5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDM0LFxuICAgICAgMTAzLFxuICAgICAgNSxcbiAgICAgIDIyMixcbiAgICAgIDY1LFxuICAgICAgMTY3LFxuICAgICAgMTE4LFxuICAgICAgMzEsXG4gICAgICAxODgsXG4gICAgICAyLFxuICAgICAgMzMsXG4gICAgICAzMyxcbiAgICAgIDExMyxcbiAgICAgIDIxMyxcbiAgICAgIDI1MyxcbiAgICAgIDQ1LFxuICAgICAgMjE1LFxuICAgICAgMTQ2LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAyMzIsXG4gICAgICAxMzYsXG4gICAgICAxMzAsXG4gICAgICA4OCxcbiAgICAgIDE3NixcbiAgICAgIDE1OCxcbiAgICAgIDI0LFxuICAgICAgMjQyLFxuICAgICAgMjMxLFxuICAgICAgMTYzLFxuICAgICAgMTY4LFxuICAgICAgMTg2LFxuICAgICAgNzksXG4gICAgICAyMTAsXG4gICAgICAxMCxcbiAgICAgIDEwNSxcbiAgICAgIDc2LFxuICAgICAgOTYsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdnA0OU1ERUxXbjI3OEdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNzbEk5aGxVODM0RFhrRmNWaDVqdFYxQVo3dG1veFR1MmtMaEhMYXZmVVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQmlmaFNhQ04xQ0hJdnRhekNNMFJwMjNQUzRBR29VNnBGNUFiR3BDdDFSSXVCSUJTODZ6SUFLYjZ2UkgyQmlSZEYvWDdRVjNRenR1eFNwcDVGeHU5amc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMnU1NlVYQk53MUhVY2hUVmZuM3VpSUZ1OUIzMVRMSlhhUUwzL0JELzFGSDBvTjR1ZW10WGtFUDllUlExeFdtUi9rVnhWQjV2UDRGeFM2SnBJb05VaEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTg2NDI2MjI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAyNTE2ODg1MjAxMDU3OjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2lrJ3Pwn4+04oCN4pig77iPIOOCreOCrVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjU4NjQyNjIyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQyMjkzMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLY2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtjWi5qc29uIjogIntcImtleURhdGFcIjpcInBVRllMTHhtMldlWlMzRDZsWjZoREhOTW4wUlRndlU0TnhtWjdEb3habjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTgxMDA1NDgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzczMjM4MjI1ODJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLY2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6UUhVNjVrVHVjMDducnl0UUgvV0Y3QXFMQWZLN2lMaFl0ZmJFcHcvd2drPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4MTAwNTQ4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzM5OTcyMDc2MzY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2NiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS01QcHMzbWN1Z3lWSG1KQmV3cC9jNnhLeTQvZFNmRG5PQ0ZESGpscGVxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODEwMDU0ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MjU2ODQ5Nzc1N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtjZC5qc29uIjogIntcImtleURhdGFcIjpcIkZwYXVQc2xweUR5Skc0Wkc5bHBpUENlbjYwVE5IeGZicHN4TzAxODc3bjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTgxMDA1NDgzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDEwNjgzODcxNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtjZS5qc29uIjogIntcImtleURhdGFcIjpcIlVwUC85WkJVUXd5b2srNFE1OHZWcW42b1JTc1M1SUptY0IzU2dJejJod2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTgxMDA1NDgzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQxMDY4Mzk5OTlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLY2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0aVdFbHNZRHZ6aWN1ZXpBSTlwNGxLcjRhNTlzcFVxOVhrSmlxc2FlN280PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4MTAwNTQ4MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzMsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQxMjUzMDUxODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFLY2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpRmpDOTRHUFRtYnBRemRnT1dacjNPeEZ2TFdsUWJVYlhQV056bEl5NnlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4MTAwNTQ4MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDEwNjkxODEzNlwifSIKfQ=="; // PUT your SESSION_ID

module.exports = {
  menu:
    process.env.MENU ||
    "" /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/,

  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "",
  caption: global.caption || "", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),

  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "STRIKE",
  ownername: process.env.OWNER_NAME || "STRIKE",

  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",

  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SUHAIL").toUpperCase(),
};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";

global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

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
