import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { NodeType } from '../enums/nodeType.enum'
import { AlgorithmsService } from './algorithms.service';
import * as summerOfLove from '../mazes/summer-of-love.json';
import * as classicGreek from '../mazes/classic-greek.json';
import * as snake from '../mazes/snake.json';
import * as jacksonPollock from '../mazes/jackson-pollock.json';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly INITIAL_START_NODE_X = 13;
  private readonly INITIAL_START_NODE_Y = 7;
  private readonly INITIAL_END_NODE_X = 13;
  private readonly INITIAL_END_NODE_Y = 59;

  public grid: Array<Array<Node>> = new Array<Array<Node>>();
  public mouseIsBeingPressed: boolean = false;

  private width: number;
  private height: number;

  private currentStartNodePosition = { x: undefined, y: undefined };
  private currentFinishNodePosition = { x: undefined, y: undefined };

  constructor() { }

  public initializeGrid(width: number, height: number) {
    this.width = width;
    this.height = height;

    for (let i = 0; i < height; i++) {
      this.grid[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        this.grid[i][j] = new Node(i + 1, j + 1, this);
      }
    }

    this.createStartNode(this.INITIAL_START_NODE_X, this.INITIAL_START_NODE_Y);
    this.createFinishNode(this.INITIAL_END_NODE_X, this.INITIAL_END_NODE_Y);
  }

  public createStartNode(x: number, y: number) {
    // Remove previous start node if there was any
    if (this.currentStartNodePosition.x || this.currentStartNodePosition.y) {
      this.startNode.reset();
    }

    const startNode = this.findNode(x, y);
    startNode.type = NodeType.Start;
    startNode.distance = 0;

    this.currentStartNodePosition.x = x;
    this.currentStartNodePosition.y = y;
  }

  public createFinishNode(x: number, y: number) {
    // Remove previous end node if there was any
    if (this.currentFinishNodePosition.x || this.currentFinishNodePosition.y) {
      this.finishNode.reset();
    }

    this.findNode(x, y).type = NodeType.Finish;

    this.currentFinishNodePosition.x = x;
    this.currentFinishNodePosition.y = y;
  }

  public clearAndReset() {
    this.clearGrid();
    this.createStartNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
    this.createFinishNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
  }

  public removeObstacles() {
    this.grid.forEach(row => {
      row.forEach(node => {
        node.removeObstacle();
      });
    });
  }

  public removeRoute() {
    this.grid.forEach(row => {
      row.forEach(node => {
        node.removeRoute();
      });
    });
  }

  public removeScanned() {
    this.grid.forEach(row => {
      row.forEach(node => {
        node.removeScanned();
      });
    });
  }

  public findNode(x: number, y: number) {
    return this.grid[x - 1][y - 1];
  }

  public get startNode(): Node {
    return this.findNode(this.currentStartNodePosition.x, this.currentStartNodePosition.y);
  }

  public get finishNode(): Node {
    return this.findNode(this.currentFinishNodePosition.x, this.currentFinishNodePosition.y);
  }

  // In case had run the algorithm previously, we have to set the nodes
  // unknown again, since the map has probably changed.
  public resetDistances() {
    this.grid.forEach(row => {
      row.forEach(node => {
        if (!node.isStart) {
          node.makeUnknown();
        }
      });
    });
  }

  private clearGrid() {
    this.grid.forEach(row => {
      row.forEach(node => {
        node.reset();
      });
    });
  }

  public applyMaze(maze: string) {
    switch (maze) {
      case "greek":
        this.parseMaze(classicGreek);
        break;
      case "love":
        this.parseMaze(summerOfLove);
        break;
      case "snake":
        this.parseMaze(snake);
        break;
      case "jackson":
        this.parseMaze(jacksonPollock);
        break;
    }
  }

  private parseMaze(maze: any) {
    // Load the default json value (whole module is passed as the argument)
    maze = maze.default;

    this.clearGrid();

    for (let i = 0; i < maze.length; i++) {

      for (let j = 0; j < maze[0].length; j++) {
        let currentNode = this.grid[i][j];

        switch (maze[i][j]) {
          case "e":
            break;
          case "o":
            currentNode.toggleType(NodeType.Obstacle);
            break;
          case "s":
            currentNode.toggleType(NodeType.Start);
            break;
          case "f":
            currentNode.toggleType(NodeType.Finish);
            break;
        }
      }
    }
  }
}
