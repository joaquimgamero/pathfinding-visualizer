import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { NodeType } from '../enums/nodeType.enum'

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly INITIAL_START_NODE_X = 20;
  private readonly INITIAL_START_NODE_Y = 10;
  private readonly INITIAL_END_NODE_X = 20;
  private readonly INITIAL_END_NODE_Y = 70;

  public grid: Array<Array<Node>> = new Array<Array<Node>>();

  private width: number;
  private height: number;

  private currentStartNodePosition = { x: undefined, y: undefined };
  private currentEndNodePosition = { x: undefined, y: undefined };

  constructor() { }

  public initializeGrid(width: number, height: number) {
    this.width = width;
    this.height = height;

    for (let i = 0; i < height; i++) {
      this.grid[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        this.grid[i][j] = new Node(i + 1, j + 1);
      }
    }

    this.createStartNode(this.INITIAL_START_NODE_X, this.INITIAL_START_NODE_Y);
    this.createEndNode(this.INITIAL_END_NODE_X, this.INITIAL_END_NODE_Y);
  }

  public createStartNode(x: number, y: number) {
    // Remove previous start node if there was any
    if (this.currentStartNodePosition.x || this.currentStartNodePosition.y) {
      this.findNode(this.currentStartNodePosition.x, this.currentStartNodePosition.y).type = NodeType.Empty;
    }

    this.findNode(x, y).type = NodeType.Start;

    this.currentStartNodePosition.x = x;
    this.currentStartNodePosition.y = y;
  }

  public createEndNode(x: number, y: number) {
    console.log(x, y);
    // Remove previous end node if there was any
    if (this.currentEndNodePosition.x || this.currentEndNodePosition.y) {
      this.findNode(this.currentEndNodePosition.x, this.currentEndNodePosition.y).type = NodeType.Empty;
    }

    this.findNode(x, y).type = NodeType.End;

    this.currentEndNodePosition.x = x;
    this.currentEndNodePosition.y = y;
  }

  public randomStartEndNodes() {
    this.createStartNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
    this.createEndNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
  }

  private findNode(x: number, y: number) {
    return this.grid[x - 1][y - 1];
  }
}
