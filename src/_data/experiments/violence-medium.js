module.exports = {
  name: "violence medium",
  description: `
    attempt at doing something like 'traditional collage' with a bunch of n64 games.
    (GoldenEye 007, Castlevania 64, Waialae Country Club, Wheel of Fortune, Resident Evil II, Perfect Dark)
  `,
  assets: [
    {
      type: "video",
      src: '/documentation/2022-12-03/violence-medium1.mp4',
    }, 
    {
      type: "image",
      src: '/documentation/2022-12-03/violence-medium2.png',
    },
    {
      type: "image",
      src: '/documentation/2022-12-03/violence-medium3.png',
    },
  ],
  tools: [
    'bizhawk',
    'unity'
  ],
  techniques: [
    'write-input',
    'write-ram',
    'chroma-key',
    'transform',
  ],
  inspiration: [
    'animonaomi-collage'
  ]
};