import { Injectable } from '@angular/core';
import { GridService } from './grid.service';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { Node } from '../models/node';
import { AlgorithmsService } from './algorithms.service';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor(private gridService: GridService, private algorithmsService: AlgorithmsService) { }

  public async renderAlgorithm(checkedNodesInOrder: Array<Node>, algorithmType: AlgorithmType) {
    for (let i = 0; i < checkedNodesInOrder.length; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          const currentNode: Node = checkedNodesInOrder[i];
          const nodeInGrid: Node = this.gridService.findNode(currentNode.x, currentNode.y);
          nodeInGrid.hasBeenChecked = true;

          resolve();
        }, i / 100);
      });
    }

    const shortestPath = this.algorithmsService.getShortestPath(this.gridService.finishNode, algorithmType);
    this.renderRoute(shortestPath);
  }

  public async renderRoute(shortestPath: Array<Node>) {
    for (let i = 0; i < shortestPath.length; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          const currentNode: Node = shortestPath[i];
          const nodeInGrid: Node = this.gridService.findNode(currentNode.x, currentNode.y);
          nodeInGrid.isRoute = true;

          resolve();
        }, shortestPath.length / 10);
      });
    }
  }

  public visualizeAlgorithm(grid: Array<Array<Node>>, startNode: Node, finishNode: Node, algorithmType: AlgorithmType) {
    this.removeRoute(grid);
    const checkedNodesInOrder: Array<Node> = this.algorithmsService.computeAlgorithm(grid, startNode, finishNode, algorithmType);
    console.log(checkedNodesInOrder);
    this.renderAlgorithm(checkedNodesInOrder, algorithmType);
  }

  private removeRoute(grid: Array<Array<Node>>) {
    grid.forEach(row => {
      row.forEach(node => {
        node.removeRoute();
      });
    });
  }
}
