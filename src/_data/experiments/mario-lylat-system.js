module.exports = {
  name: "mario in lylat system",
  description: `
2022-10-21: running two n64 instances (super mario 64 and lylat wars),
both receiving input, and blending in {{ link_thing('/tools/touchdesigner') }}.
also tried blending via checkerboard matte.
also tried blending using a third n64 instance running killer instinct as the matte.

2022-10-28: we also tried making the matte be a smaller portion of the screen, or a single color, black, resulting in a scenario where you could play starfox inside a chain chomp. by using black as a matte we also got the death bowser sweep animation from mario 64 to become a plundered transition between games.
  `,
  comments: `
i really like the lylat blending on water, playing the 2 games at the same time works surprisingly well. - mut
i really like the bowser transistion and think it could probably be an entire project, finding game transitions and creating savepoints that shows those. maybe something to do with david kanaga's liquid transitions - mut
  `,
  assets: [
    {
      type: "video",
      src: "/documentation/2022-10-21/mario-lylat-system.mp4"
    },
    {
      type: "image",
      src: "/documentation/2022-10-21/checkers.jpg"
    },
    {
      type: "video",
      src: "/documentation/2022-10-21/killer-instinct-matte.mp4"
    },
    {
      type: "video",
      src: "/documentation/2022-10-28/chainchomp-matte.mp4"
    },
  ],
  techniques: [
    'blending',
    'transitions'
  ],
  tools: [
    'bizhawk',
    'touchdesigner'
  ],
  inspiration: [
    'david kanaga',
  ]
};