
module.exports = {
  name: "mario angst",
  description: `
    reading Mario's X & Y velocity, feeding those back into X and Y controller input via VCVRack.
    generative soundtrack also in VCVRack
  `,
  assets: [
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-angst-1.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-angst-2.mp4"
    },
  ],
  tools: [
    'bizhawk',
    'vcv-rack'
  ],
  techniques: [
    'write-input',
    'read-ram',
    'audio-postprocess',
    'add-sound'
  ],
  inspiration: [
  ]
};