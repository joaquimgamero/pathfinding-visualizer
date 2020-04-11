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

  constructor() { }

  public initializeGrid(width: number, height: number) {
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
    this.findNode(x, y).type = NodeType.Start;
  }

  public createEndNode(x: number, y: number) {
    this.findNode(x, y).type = NodeType.End;
  }

  private findNode(x: number, y: number) {
    return this.grid[x - 1][y - 1];
  }
}
