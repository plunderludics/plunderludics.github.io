
module.exports = {
  name: "mario feedback",
  description: `
    this is {{ link_thing('/experiments/mario-angst') }} plus a visual post-processing layer,
    chroma key out most of the background, then apply video feedback loop (in OBS).
  `,
  assets: [
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-feedback-1.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-feedback-2.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-feedback-3.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-feedback-4.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-07/mario-feedback-5.mp4"
    }
  ],
  tools: [
    'bizhawk',
    'obs',
    'vcv-rack'
  ],
  techniques: [
    'write-input',
    'read-ram',
    'chroma-key',
    'audio-postprocess',
    'add-sound'
  ],
  inspiration: [
  ]
};