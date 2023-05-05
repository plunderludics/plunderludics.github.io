## Intro
plunderludics is like sampling records but for games instead of music. if you wanna know more go [[plunderludics/index|index]]

we have been playing around with this stuff for a while and found a bunch of helpful tools that make the whole thing a bit easier.

this tutorial is like a step-by-step guide to help you get started. We are gonna grab a sample from Mario 64 and do some crazy stuff with it.

### Preliminaries
This whole thing probably only works on Windows atm :/

Tutorial assumes you have a little bit of familiarity with emulators, you know what a 'save state' is, etc. Being familiar with Unity & Lua will also help in the later parts.

Being familiar with using the command line and Python will also be very convenient but not totally necessary.

## Setting up

### Download plunder repos
Clone or download this repo: https://github.com/plunderludics/samples.
This has a bunch of videogame samples that we have created and also a script for conveniently running them.
Also this one: https://github.com/plunderludics/scripts, which has a BizHawk configuration file (very useful) and a bunch of other scripts you probably don't need right now.

### Install BizHawk
First you gotta get [https://tasvideos.org/BizHawk|BizHawk]. BizHawk is a great open-source project that packages up a bunch of emulators for different platforms - NES, PSX, N64, + like 100 other platforms. It is useful for this stuff because it has nice Lua scripting support (we will get to this later).

[//]: # (TODO at some point soon gotta replace this with our fork - guess we need to maintain a release page too)

So go to the BizHawk link and download it (we are currently using the latest version, 2.9.1). You also need to run the 'prereq installer' to install a bunch of dependencies.
Once you've installed the prereqs, unzip the BizHawk folder. EmuHawk.exe is the main executable, run it. You should just see a black window right now because no game is loaded.

### Find a rom
To run a game in BizHawk you gotta find a rom (the file that contains the game). It is not hard to find roms online for pretty much any game by searching for '\<game name\> \<platform\> \<rom\>'. For this tutorial we will our favorite Mario 64.

So download the rom, then open it in BizHawk, and the game should just start running. Now you can play Mario 64 on your computer.

To make the rest of the tutorial more convenient, make a directory called `roms` in the same directory as BizHawk. Put the mario rom file in there, and rename it to `mario.z64` for simplicity. Also put the `samples` directory in the same parent directory.

So file hierarchy would look like:
- plunderludics
	- BizHawk
	- roms
		- mario.z64
	- samples
	- scripts

[//]: # (TODO formatting)

## Sampling
OK so in music a 'sample' usually means a fragment of audio ripped from a longer track. In plunderludics the meaning is a little more vague but we imagine the equivalent as being like a  'moment' of gameplay ripped from an existing game. E.g. maybe we like the little bit of gameplay where mario can spin around at the top of a tree outside the castle.

### Make a sample
The most important piece of a plunderludic sample is a save state. So we get mario up to the top of the tree, and then hit 'Save Named State' in BizHawk to save the state. Make a new folder in the `samples` directory called something like `mario-in-tree`, and save the state file within that directory (called something like `mario-in-tree.State`)

[//]: # (TODO check 'Save Named State' / 'Load State' commands)
[//]: # (TODO screenshots)

\[Ignore this bit if you don't want to use Python/command line]
This part is a bit annoying, but you should also make a file called `rompath.txt` inside the `mario-in-tree` directory, and put this text inside: `../roms/mario.z64`. This lets our run_sample.py script (see below) know which rom this particular sample is connected to.

### Run the sample
The easiest way to run the sample is open BizHawk, load the mario rom, and then load the state that you just saved. But this can be annoying if you have to do those steps many times while working on something. So we also have a script called `run_sample.py` which basically automates those steps. If you have a command line + Python installed, you can run it like this, from the `samples` directory:
`python run_sample.py mario-in-tree`.

From here you can get started sampling your favorite videogame moments.

## More
If you want to be able to do stuff like applying effects to the game graphics, overlaying different games on top of each other, etc, read 'Postprocessing in Unity'.

If you want to be able to modify the samples themselves - (e.g. we could disable the up & down controls so mario can't climb down the tree), read 'basic scripting'.

For actually modifying the state of the emulated game in RAM (like changing Mario's health value or position, etc), read 'RAM hacking'.

### Postprocessing in Unity
Clone or download: https://github.com/plunderludics/plunderunity
Put that inside your top-level plunderludics directory as well.
`plunderunity` is a Unity project with some tools for plundering. The most important thing it can do is capture another window on the computer (e.g. BizHawk), and let you use that as a texture within Unity.

More to come, but to get started check out the SoftwareSample prefab.
...

### Basic scripting
...
### RAM hacking
...