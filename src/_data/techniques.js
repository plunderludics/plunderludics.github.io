// these could also be separate files in a folder called 'techniques/',
// but that seems annoying
module.exports = {
  "read-input": {
    name: "read key/controller input",
    subcategory: "input"
  },
  "write-input": {
    name: "simulate key/controller input (e.g. trigger a jump)",
    subcategory: "input"
  },

  "read-ram": {
    name: "set parameters or trigger events based on game state values (e.g. Mario X position)",
    subcategory: "memory"
  },
  "write-ram": {
    name: "modify game state values (e.g. num coins)",
    subcategory: "memory"
  },

  "load-state": {
    name: "load state",
    subcategory: "emulator"
  },
  "save-state": {
    name: "save state",
    subcategory: "emulator"
  },

  "chroma-key": {
    name: "chroma keying",
    subcategory: "visual"
  },
  "cutting": {
    name: "cutting",
    subcategory: "visual"
  },
  "visual-blending": {
    name: "blending",
    subcategory: "visual"
  }, 
  "transform": {
    name: "cropping, translating, duplicating, mirroring",
    subcategory: "visual"
  }, 
  "video-postprocess": {
    name: "post-processing",
    subcategory: "visual"
  }, 
  "add-visual-elements": {
    name: "overlay new visuals",
    subcategory: "visual"
  }, 
  "analyze-video": {
    name: "analyze video to set params or trigger events",
    subcategory: "visual"
  },

  "audio-blending": {
    name: "blending",
    subcategory: "aural"
  },
  "audio-postprocess": {
    name: "blending",
    subcategory: "aural"
  },
  "add-sound": {
    name: "add whatever original sound",
    subcategory: "aural"
  },
  "analyze-audio": {
    name: "analyze audio to detect events",
    subcategory: "aural"
  }
};