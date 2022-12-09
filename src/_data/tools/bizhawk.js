const t = require('../techniques');
module.exports = {
  name: "BizHawk",
  description: "for emulating console games. can read and modify the game state (ie, RAM) via Lua scripting",
  url: "https://tasvideos.org/BizHawk",
  techniques: [
    'write-input',
    'read-ram',
    'write-ram',
    'save-state',
    'load-state',
  ],
  "other-plunderludics": [
    "sonic-but"
  ]
};