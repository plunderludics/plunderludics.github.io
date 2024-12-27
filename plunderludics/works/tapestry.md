link: https://drive.google.com/drive/u/1/folders/16Sep7xhLlf6d3ptizOo6sx5s4zBLZUVk
by: [[mut]]
## samples
- [[samples/Banjo Kazooie (N64)/posttutorial]]
- [[samples/Bubsy 3d (PS1)/beginning]]
- [[samples/Bomberman 64 (N64)/beginning]]
- [[samples/Bugs Bunny: Lost in Time (PS1)/rinkwatch]]
- [[samples/Croc: Legend of Globbos (PS1)/floatingplatform]]
- [[samples/Castlevania 64 (N64)/freemove-girl]]
- [[samples/Mega Man 64 (N64)/posttutorial]]
- [[samples/The Legend of Zelda: Majora's Mask (N64)/beginning-triplejump]]
- [[samples/Quest 64 (N64)/stairshallway]]
- [[samples/Mystical Ninja Starring Goemon (N64)/swim]]
- [[samples/Rayman 2: The Great Escape (N64)/posttutorial-waterfall]]
- [[samples/Super Mario 64 (N64)/courtyard]]
- [[samples/Army Men: Sarge's Heroes (N64)/start]]
- [[samples/Muppets Monster Adventure (PS1)/castletop-slide]]
- [[samples/Hybrid Heaven (N64)/fun-hallway]]
- [[samples/Spyro The Dragon (PS1)/unremarkable-hill-invisiblewall]]

multiple third person games from 5th generation consoles (psx, n64), cut, sampled, limited and blended as such to allow for textural exploration.

a plunderludic experiment that plays with memory and nostalgia and the meaning of moving within and around videogames. exploring the relation of the infinite possibilities of plays within constrained virtual spaces, which sometimes might mean pushing your avatar into a wall until it becomes something else

# technicals

this game can be run on any windows machine that has the [[bizhawk]] [prerequisites](https://github.com/TASEmulators/BizHawk-Prereqs/releases) installed.

the input is arrow keys, on a keyboard, joy2key can be used for using a game controller, a controller that looks like a ps1 or n64 are recommended

# notes

stitching a large amount of games together through movement, crossfading between them according to movement. 

it's number 4 since there were some experiments before it related to stitching, which came undocumented, but mostly using multiple games and VCV rack to blend between them

since connecting the games spatially from games' states themselves would be too hard, an invisible character in unity is what controls the blend and triggers call of new samples. a character walks in a triangular grid where each vertex represents a game, the final image is a blend of the three points of the triangle, using [barycentric coordinate systems](https://en.wikipedia.org/wiki/Barycentric_coordinate_system) (thanks @pancelor for the suggestion).

![[2023-06-02-tapestry4-internal.png]]


## comments

> mut: the dream is that these are actually connected through space within each game, hopefully a future experiment will work that way...
> i also modified the walker to use tank controls after [[2023-02-25 spring salad]], since people mostly press forward and sideways movement doesn't happen that often, making the invisible character move like a tank create more unique traversal's through the tapestry
> for Festival Ecrã i also made a modification where its playable via twitch, but that mostly means it auto plays...

## techniques
[[crossfading|techniques/crossfading]]
## tools
[[bizhawk]]
[[unity-samplemixer]]


## screenshots:
![[2023-06-02-tapestry4-1.png]]
![[2023-06-02-tapestry4-2.png]]
![[2023-06-02-tapestry4-3.png]]
![[2023-06-02-tapestry4-4.png]]
![[2023-06-02-tapestry4-5.png]]

