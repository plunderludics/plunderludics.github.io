This wiki should be live at https://plunderludics.github.io/

this wiki is being made using [obsidian](https://obsidian.md/), which is a pretty straightforward text editor with some nifty functionalities that makes writing wiki-style text pretty nice. in particular the ability to simply create links to other pages in the wiki like this: `[[setting up the wiki]]`

since its all based on markdown files, it also gives us some other nice properties:
- it can be syncronized with git, just use your git client of choice
- it can be edited by any text editor (although obsidian itself is probably the best)
- it can be converted into a website from a myriad of markdown static site generators.

## on computer

clone the [wiki repository](https://github.com/plunderludics/wiki)

download [obsidian](https://obsidian.md/)

once you open obsidian, you will be prompted to choose your "vault", just pick the folder `plunderludics` within the wiki repository, and you should be good to go! 

remember to pull and push whenever you want to add new stuff

## on android
tbd: following [this tutorial](https://lucidhacker.substack.com/p/setting-up-git-syncing-for-obsidian)

## on ios
tbd

## publishing the wiki
Website is built using (obsidianhtml 3.5.2)[https://pypi.org/project/obsidianhtml/3.5.2/]. (Doesn't work with version 4!). Once that is installed, update the public website  by running:

```bash
obsidianhtml convert -i config.yaml
```

and push the changes to main.

TODO: have github actions to actually convert the wiki after its pushed instead of having to do it locally (gitlab is also good for this)

