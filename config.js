//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113,2347053192517";
global.owner = process.env.OWNER_NUMBER || "2348088047248";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1jOUF2TlpnanVDQ3JhaTI0bjBwQ3F5cksrK2R4N1pNTjlpcWVjNm5YST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpiY1N1WGFTT255VGVBN3FIZlZQVGdiOFVtWUJFZUtVeGRKVndQWG55VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQjdSUzRWZ3ZpNnpKSjFPQ3lyRzZRSkZQRHRjZEpubFVxMjkxL2s4RVhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZDRqODVMMVNzSUV4b2hFb3ZWcFhGWlNlN3ZYSFp3Wkd5TStZZlRGRjBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNaXZ6cXJ1VkFNYkYyeExsTncvb0lHWGxuTVE3WVZhbVZQazNVdHRtWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRWVzc4QVR6bGg4Q0pPTHloWVg3cHZvZWt6TktNQlVsdjdpczhheHhkd3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RzQzViQmw0eXpDbnVIQXd5QWhnWGIzVGJvQmpmZDkrQWxxdDhrZURWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmQ1dlpRdVQxTjBwbGZkeXF3dUhTd00zcldzZjYwMzVOK29DYjFnUkx6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBlMXpPdDNOUnI2ckx3QTRzU3NySzA0aEVVWHJUU21KVVZ2VGpFUk80NGNyUXhhNnFyNjdSVmNvN1U5aWdHTXVMWThLU2VadDNiRktXaWMyVzFBTERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6ImZVbUtPZnp1TDRxZExGcHB3MnkyaG5iOU92ZXpUbkxDUUZjbU5ncFByZzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4ODA0NzI0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NjhFNUU2MzUyMzZGQTQzQzg3QThBMDREOEUwMTNBNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzMzg5NzQwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2akVBZm44RVRKeWE1bDNoQXktTmNRIiwicGhvbmVJZCI6IjEzMTM4YWQ0LWNlN2ItNDVhMC1iY2E5LTE3Yjk3YTc1N2Q5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRMllNUmU1OWc3cVE3NTBpSVFSc1kzdXpqdEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUZxOEl1dXBQTU9DdWhQWU9QK0FLV2xpbHlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ0VFQ1MUFHIiwibWUiOnsiaWQiOiIyMzQ4MDg4MDQ3MjQ4OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmlnIEQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BHandlVUNFSmJieGJvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlXQVJQdGtGRTBXbm95UGF3Tyt3V2t0eEdreE5tbW5XK0taV25mYktQanM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFFNlBmeW9nMGEwVVVnTHJya24zN0tmd29hZzhQeGVOWUh5Z1hwUDNEUzZNZjNjWlhKRWZyOHpiMnkzUmNUMXo4djdqSHpJUDBwWVhYSGdUSHBBV0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNK3l3QXA3SEJKRVlGWlFTSkphWklZYnpNWkJKcng4VExERjBxSlFSOXVjYkdaTGxVNVg5S3lGekJ5R09hUkp0OCtkZnVKUHgyT1lLOFpKajlrdTVDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODgwNDcyNDg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbGdFVDdaQlJORnA2TWoyc0R2c0ZwTGNScE1UWnBwMXZpbVZwMzJ5ajQ3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMzg5NzM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFsaiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
