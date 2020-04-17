import { Injectable } from '@angular/core';
import { GridService } from './grid.service';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { Node } from '../models/node';
import { AlgorithmResponse } from '../models/algorithm-response';
import { AlgorithmsService } from './algorithms.service';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  public lastAlgorithmExecution: AlgorithmResponse;

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

    if (this.lastAlgorithmExecution.objectiveFound) {
      this.renderRoute(this.lastAlgorithmExecution.nodesInShortestPathOrder);
    }
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

  public visualizeAlgorithm(algorithmType: AlgorithmType) {
    this.removeRouteAndCheckedNodes();

    this.lastAlgorithmExecution =
      this.algorithmsService.computeAlgorithm(this.gridService.grid, this.gridService.startNode, this.gridService.finishNode, algorithmType);
    this.renderAlgorithm(this.lastAlgorithmExecution.checkedNodes, algorithmType);

    console.log(this.lastAlgorithmExecution);
  }

  private removeRouteAndCheckedNodes() {
    this.gridService.grid.forEach(row => {
      row.forEach(node => {
        node.removeRoute();
        node.hasBeenChecked = false;
        node.previousNode = null;
      });
    });
  }
}
