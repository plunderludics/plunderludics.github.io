module.exports = {
  name: "mario ghost",
  description: `
    running 2 mario 64 instances at the same time, and overlaying them over each other
  `,
  comments: `
    attempting to try get both instances of the game at the same place feels pretty nice.
  `,
  assets: [
    {
      type: "video",
      src: "/documentation/2022-10-21/mario-double.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-21/mario-double2.mp4"
    },
  ],
  tools: [
    'bizhawk',
    'touchdesigner'
  ],
  techniques: [
    'video-blending'
  ],
  inspiration: [
    'boulder-blues'
  ]
};