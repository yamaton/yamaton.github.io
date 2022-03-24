---
layout: post
title:  Triton Notebook demo video
date:   2022-03-15 8:00 -0500
categories: triton update
---

{% include youtube_embed.html id="NfETG849R80" %}


Check out our demo video on Triton Notebook!

Here is how to set up this notebook environment on Visual Studio Code.

1. Open up [Visual Studio Code](https://code.visualstudio.com/) (Install if you don't have one. It's great for many purposes anyway.)

2. Install [Shell script command completion](https://marketplace.visualstudio.com/items?itemName=tetradresearch.vscode-h2o) from the Marketplace. This is our extension enabling command autocompletion.

3. Go to `Help` → `Show All Commands`.
![Show all commands](/assets/vscode-show-all-commands.png)

4. Type and choose "Jupyter: Create New Jupyter Notebook".
![Create new Jupyter notebook](/assets/vscode-create-new-jupyter-notebook.png)

5. Click "Python" at the bottom right corner of the box to change the cell language mode. Select "Shell Script".
![Select cell language mode](/assets/vscode-jupyter-select-language.png)

6. Always type `%%bash` **at the first line of each cell** to enter command-line programs.
![Command autocompletion in action](/assets/vscode-jupyter-completion-in-action.png)


