stitching a large ammount of games together through movement, crossfading between them according to movement. 
it's number 4 since there were some experiments before it related to stitching, which came undocumented, but mostly using multiple games and VCV rack to blend between them

since connecting the games spatially from games' states themselves is really hard, an invisible character in unity is what controls the blend and triggers call of new samples. a character walks in a triangular grid where each vertex represents a game, the final image is a blend of the three points of the triangle, using [barycentric coordinate systems](https://en.wikipedia.org/wiki/Barycentric_coordinate_system) (thank's @pancelor for the suggestion).

![[2023-06-02-tapestry4-internal.png]]


mut wrote this for Festival Ecrã 2023: 
```
multiple third person games from 5th generation consoles (psx, n64), cut, sampled, limited and blended as such to allow for textural exploration.

a plunderludic experiment that plays with memory and nostalgia and the meaning of moving within and around videogames. exploring the relation of the infinite possibilities of plays within constrained virtual spaces, which sometimes might mean pushing your avatar into a wall until it becomes something else ```
```

## comments

> mut: the dream is that these are actually connected through space within each game, hopefully a future experiment will work that way...
> i also modified the walker to use tank controls after [[2023-02-25 spring salad]], since people mostly press forward and sideways movement doesn't happen that often, making the invisible character move like a tank create more unique traversal's through the tapestry
> for Festival Ecrã i also made a modification where its playable via twitch, but that mostly means it auto plays...


## techniques

## tools
[[bizhawk]]
[[unity-samplemixer]]


## screenshots:
![[2023-06-02-tapestry4-1.png]]
![[2023-06-02-tapestry4-2.png]]
![[2023-06-02-tapestry4-3.png]]
![[2023-06-02-tapestry4-4.png]]
![[2023-06-02-tapestry4-5.png]]
