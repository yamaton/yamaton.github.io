---
layout: post
title:  Command-line interface has a problem
date:   2022-03-24 12:00 -0500
categories: autocomplete
---

![](https://4.bp.blogspot.com/-HP2xMvZI9gc/V2ubhMWexoI/AAAAAAAA7pU/DYF9XhceGi4N0JLn8KGkiCfnxITQjiHdACLcB/s800/door_close.png)


You see a door in front of you. You can tell it's a door because it has a knob. You can tell it opens and closes because of the knob and door frames. This is how you can distinguish a door from a wall.

There is no such thing as a knob in command-line interfaces. It's like you're surrounded by spheres and polygons and you have no idea how they work. Experts say RTFM (read the fxxking manual), but we have never read a manual of a door. There must be a better way.


![](https://3.bp.blogspot.com/-nfvzHic2lZg/WaPv4asdR6I/AAAAAAABGQQ/AUX7A8cNNNIcjXIbM-2AnbiTUt2_KQUcgCLcBGAs/s400/math_hypercube.png)


This [xkcd comic](https://xkcd.com/1168/) depicts the situation beautifully. ([Here](https://www.explainxkcd.com/wiki/index.php/1168:_tar) is an explanation if you don't get it.)


[![](https://imgs.xkcd.com/comics/tar_2x.png)](https://xkcd.com/1168/)


Libraries of programming languages are in a better position thanks to IDEs. IDEs provide autocomplete (aka. IntelliSense) with bite-sized descriptions. They also allow you to peek at definitions. The command-line interfaces desperately need IDE-like features and more.


[![IntelliSense in Visual Studio Code](https://code.visualstudio.com/assets/docs/editor/intellisense/intellisense.gif)](https://code.visualstudio.com/docs/editor/intellisense)


On a terminal, [Fish shell](https://fishshell.com/) provides the best autocompletion as far as I know. But fish-shell script has to be prepared for each command to achieve autocompletion, and they are mostly done by open-source participants. Because such manual work is required, the number of supported commands is limited.


So we created a parser program extracting command specs from manpages and help texts. Then we generated data for autocompletion for bioinformatics tools. Currently, 244 shell completion scripts are available for [fish](https://github.com/yamaton/fish-completions-bio) and [zsh](https://github.com/yamaton/zsh-completions-bio).

![](https://user-images.githubusercontent.com/256288/154600277-a4d936b0-d7b0-4406-aab6-e4d953a8d64c.gif)

We have further applied the command specs to make the autocomplete and introspection available on Visual Studio Code in shell script mode.

[![](https://raw.githubusercontent.com/yamaton/vscode-h2o/main/images/demo-mouseover.gif)](https://marketplace.visualstudio.com/items?itemName=tetradresearch.vscode-h2o)

Autocomplete is just one of many factors making command-line programs discoverable and learnable. We are still on the way.
