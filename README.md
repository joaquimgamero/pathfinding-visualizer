# Pathfinding Algorithms Visualizer

This is a fun, 100% desktop oriented pathfinding algorithms visualizer and playground. It's built on Angular 9 and deployed to <a href="https://joaquimgamero.github.io/pathfinding-visualizer/">https://joaquimgamero.github.io/pathfinding-visualizer</a>. A pathfinding algorithm seeks to find the shortest path between two points, just like any maps app would do. The purpose of this app is to see these algorithms in action and to observe the differences between them under two dimensional, customizable maps.

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/pathfinding-example.jpg" width="200">
</p>

# Different algorithms

You can use the algorithm picker to try different algorithms. Note that some algorithms are unweighted, while others are weighted. Unweighted algorithms do not take turns or weight nodes into account, whereas weighted ones do.

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/pick-algorithm.gif" width="200">
</p>

Different pathfinding algorithms output different results, and the shortest path given may differ.

* **Dijkstra** (weighted): the father of pathfinding algorithms; guarantees the shortest path.
* **A*** (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm.
* **Breadth-first** (unweighted): a great algorithm; guarantees the shortest path.
* **Depth-first** (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path.

# Using the map 

You can move the starting point (a blue arrow) and the finish point (the goal, a purple diamond) clicking and dragging on them.

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/drag.gif" width="200">
</p>

You can also paint walls and obstacles in order to investigate how the different algorithms work and solve the problem. Just click down and move the cursor while holding the click button, like you would do in any image editor.

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/paint.gif" width="200">
</p>

When you are ready, just click on the purple **Visualize!** button in the header, and the algorithm will start scanning the map, eventually finding the shortest path (a yellow line).

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/visualize.gif" width="300">
</p>

There are some presets for the map, called mazes. You can load them with the Mazes selector. They instantly provide a complete map designed for you to see the differences between different algorithms.

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/maze.png" width="300">
</p>

# Have fun!

Enjoy this algorithm visualizer and have fun messing around. I built this during the COVID19 quarantine period, 2020. Feel free to hit me up if you want to talk about this project or any other fancy stuff!

<p align="center">
  <img src="https://joaquimgamero.github.io/pathfinding-visualizer/assets/img/fun.webp" width="200">
</p>
