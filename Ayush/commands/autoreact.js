module.exports.config = {
  name: "autoreact",
  version: "3.0.0",
  hasPermission: 1,
  credits: "ChatGPT",
  description: "Auto react with custom admin IDs",
  commandCategory: "system",
  usages: "[on/off/add/remove/list]",
  cooldowns: 0,
};

let autoReactStatus = {};
let customAdmins = []; // store FB IDs here

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, messageID } = event;

  if (!autoReactStatus[threadID]) return;

  // check if sender is in custom admin list
  if (!customAdmins.includes(senderID)) return;

  // react with 😆
  api.setMessageReaction("😆", messageID, (err) => {}, true);
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID } = event;

  let cmd = args[0]?.toLowerCase();

  if (!cmd) {
    return api.sendMessage(
      "Usage:\n+autoreact on/off\n+autoreact add [FB ID]\n+autoreact remove [FB ID]\n+autoreact list",
      threadID
    );
  }

  if (cmd === "on") {
    autoReactStatus[threadID] = true;
    return api.sendMessage("✅ Auto react ON 😆", threadID);
  }

  if (cmd === "off") {
    autoReactStatus[threadID] = false;
    return api.sendMessage("❌ Auto react OFF", threadID);
  }

  if (cmd === "add") {
    let id = args[1];
    if (!id) return api.sendMessage("⚠️ Enter FB ID", threadID);

    if (!customAdmins.includes(id)) {
      customAdmins.push(id);
    }

    return api.sendMessage(`✅ Added admin: ${id}`, threadID);
  }

  if (cmd === "remove") {
    let id = args[1];
    if (!id) return api.sendMessage("⚠️ Enter FB ID", threadID);

    customAdmins = customAdmins.filter(uid => uid !== id);

    return api.sendMessage(`❌ Removed admin: ${id}`, threadID);
  }

  if (cmd === "list") {
    if (customAdmins.length === 0) {
      return api.sendMessage("📭 No custom admins.", threadID);
    }

    return api.sendMessage(
      "👑 Custom Admins:\n" + customAdmins.join("\n"),
      threadID
    );
  }
};  if(react.includes("India") || react.includes("india") || react.includes("bharat") || react.includes("Bharat")) {
      var flag = {
        body: ""
      }
      api.sendMessage(flag, threadID, messageID);
    api.setMessageReaction("🇮🇳", event.messageID, (err) => {}, true)
          };
  if(react.includes("eve") || react.includes("Eve") || react.includes("morning") || react.includes("Morning") || react.includes("afternoon") || react.includes("Afternoon") || react.includes("evening") || react.includes("eat") || react.includes("Eat") || react.includes("night") || react.includes("nyt") || react.includes("Night") || react.includes("Nyt")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
            };
  if(react.includes("wow") || react.includes("robot")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😮", event.messageID, (err) => {}, true)
            }
        }
  mports.run = function({ api, event, client, __GLOBAL }) {
  }

