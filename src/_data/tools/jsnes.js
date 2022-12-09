module.exports = {
  name: "jsnes",
  description: `SNES emulator with somewhat easy integration with web browser stuff.
  <a href="nes.mut.media">mut's plunderludics</a> uses this mainly`,
  techniques: [
    'write-input',
    'read-ram',
    'write-ram',
    'save-state',
    'load-state',
  ],
  url: "https://github.com/bfirsh/jsnes",
  "our-plunderludics": [
    "auto-mario",
    "tennis-for-one",
    "pacman-quine"
    // dv: ?
  ]
};