import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { NodeType } from '../enums/nodeType.enum'
import { AlgorithmsService } from './algorithms.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly INITIAL_START_NODE_X = 10;
  private readonly INITIAL_START_NODE_Y = 20;
  private readonly INITIAL_END_NODE_X = 20;
  private readonly INITIAL_END_NODE_Y = 30;

  public grid: Array<Array<Node>> = new Array<Array<Node>>();

  private width: number;
  private height: number;

  private currentStartNodePosition = { x: undefined, y: undefined };
  private currentFinishNodePosition = { x: undefined, y: undefined };

  constructor(private algorithmsService: AlgorithmsService) { }

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
    this.createFinishNode(this.INITIAL_END_NODE_X, this.INITIAL_END_NODE_Y);
  }

  public createStartNode(x: number, y: number) {
    // Remove previous start node if there was any
    if (this.currentStartNodePosition.x || this.currentStartNodePosition.y) {
      this.startNode.type = NodeType.Empty;
      this.startNode.distance = Infinity;
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
      this.finishNode.type = NodeType.Empty;
      this.finishNode.distance = Infinity;
    }

    this.findNode(x, y).type = NodeType.Finish;

    this.currentFinishNodePosition.x = x;
    this.currentFinishNodePosition.y = y;
  }

  public randomStartEndNodes() {
    this.createStartNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
    this.createFinishNode(Math.floor((Math.random() * this.height) + 1), Math.floor((Math.random() * this.width) + 1));
  }

  public visualizeDijkstra() {
    const checkedNodesInOrder: Array<Node> = this.algorithmsService.dijkstra(this.grid, this.startNode, this.finishNode);
    this.renderAlgorithm(checkedNodesInOrder);
  }

  private findNode(x: number, y: number) {
    return this.grid[x - 1][y - 1];
  }

  private get startNode(): Node {
    return this.findNode(this.currentStartNodePosition.x, this.currentStartNodePosition.y);
  }

  private get finishNode(): Node {
    return this.findNode(this.currentFinishNodePosition.x, this.currentFinishNodePosition.y);
  }

  private renderAlgorithm(checkedNodesInOrder: Array<Node>) {
    for (let i = 0; i < checkedNodesInOrder.length; i++) {
      const currentNode: Node = checkedNodesInOrder[i];
      const nodeInGrid: Node = this.findNode(currentNode.x, currentNode.y);
      nodeInGrid.hasBeenChecked = false;

      setTimeout(() => {
        nodeInGrid.hasBeenChecked = true;
      }, 40 * i);
    }
  }
}
