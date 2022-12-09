
module.exports = {
  name: "linked jumps",
  description: `
    2022-10-28: connecting zelda majora's mask jumping to mario 64 jumping. in n64 Zeldas jump is contextual, there's no jump button. reading the memory to see changes in link vertical speed and sending osc messages between the processes to communicate.

    TODO: try a single video stream, alternating games on jump.
  `,
  comments: `
  its interesting to see how in zelda jumps are a thing that happens in space, and its mostly not an expressive option, unlike in mario 64 where jumping is. a cool challenge is to attempt finding a way to do a triple jump, what is initially temporal becomes spatial. - moochi
  `,
  assets: [
    {
      type: "video",
      src: "/documentation/2022-10-28/linked-jumps.mp4"
    },
  ],
  tools: [
    'bizhawk',
    'osc',
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