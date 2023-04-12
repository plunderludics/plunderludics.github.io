outline:
- folder structure
- plunderunity
  - EmulatorCapture
  - mixer4 / mixer8 / osc
  - sample loader
- scripts
  - tracks4.bat / tracks8.bat
  - track.bat

## directory structure

you need your folder structure like this:

PLUNDER_HOME (%PLUNDER_HOME%)
- Bizhawk [(build here)](https://drive.google.com/file/d/1-4xwnOr5QIpLih28YEdCQBVZRBb8UCmd/view?usp=share_link)
  - output
    - BizHawk.exe
- scripts [(git repo)](https://github.com/plunderludics/scripts)
- samples [(git repo)](https://github.com/plunderludics/samples)
- plunderunity [(git repo)](https://github.com/plunderludics/plunderunity)
- roms (from internet archive)
- Bizhawk-source (optional, if you want to modify bizhawk itself) [(git repo)](https://github.com/plunderludics/BizHawk)

all the github repos are [here](https://github.com/plunderludics)

you have to set the main folder as your %PLUNDER_HOME% environment variable. (i'll make this easier in the future)

Window Search Environmental Variables:

![](img/2023-03-03-16-20-14.png)

---

## roms

you can get extra roms at the internet archive, following links:
- nes: https://archive.org/details/cylums-nes-rom-collection
- n64: https://archive.org/download/cylums-nintendo-64-rom-collection/Cylum%27s%20Nintendo%2064%20ROM%20Collection%20%2802-19-2021%29/
- psx: https://archive.org/download/psx-roms-archive

the search `\[console\] rom archive usually works pretty well, or `\[console\] cylum`

---

## plunderunity

[repo](https://github.com/plunderludics/plunderunity)

mostly the unity tools to render emulator windows and send/receive OSC messages.

it can also send and receive OSC for some parameters.

all of the experiments are shared in this repo, its chaos.

some useful prefabs

### EmulatorCapture
is a prefab that captures a window. you can set the window title to capture on "Partial Window Title", and set the render texture of your choice.

you can use the render texture on a canvas Raw Image.

### Mixer4 and Mixer8

mixes 4 or 8 textures, based on windows that contain the string `trackN`heir title. (N from 1 to 8), see [scripts/track.bat]() for details.

### SampleLoader
used to load samples in specific tracks. call `LoadSample(string trackName, string sampleName)` to load the named sample on the track named trackName. see [scripts/track.bat]() for details.

---


## scripts

https://tasvideos.org/Bizhawk/LuaFunctions

### tracks-N
opens
in the scripts folder, you can run the script tracks-8.bat to open 8 bizhawk instances names trackX (1 to 8)

it does this by running the track script, which you can run like this:

```bat
track.bat <sample_name> <window_title>
```

