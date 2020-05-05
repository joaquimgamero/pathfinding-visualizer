import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { computeDijkstra } from '../algorithms/dijkstra';
import { getDijkstraShortestPath } from '../algorithms/dijkstra';
import { computeAstar } from '../algorithms/a-star';
import { getAstarShortestPath } from '../algorithms/a-star';
import { computeBreadthFirst } from '../algorithms/breadth-first.js';
import { getBreadthFirstShortestPath } from '../algorithms/breadth-first.js';
import { computeDepthFirst } from '../algorithms/depth-first.js';
import { getDepthFirstShortestPath } from '../algorithms/depth-first.js';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { AlgorithmResponse } from '../models/algorithm-response';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  lastAlgorithmResponse: AlgorithmResponse;
  selectedAlgorithm: AlgorithmType;

  constructor() { }

  public computeAlgorithm(grid: Array<Array<Node>>, startNode: Node, finishNode: Node, algorithmType: AlgorithmType): AlgorithmResponse {
    let scannedNodesInOrder = [];

    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        scannedNodesInOrder = computeDijkstra(grid, startNode, finishNode);
        break;
      case AlgorithmType.Astar:
        scannedNodesInOrder = computeAstar(grid, startNode, finishNode);
        break;
      case AlgorithmType.BFS:
        scannedNodesInOrder = computeBreadthFirst(grid, startNode, finishNode);
        break;
      case AlgorithmType.DFS:
        scannedNodesInOrder = computeDepthFirst(grid, startNode, finishNode);
        break;
    }

    this.uncheckAllNodes(grid);
    const path = this.getShortestPath(finishNode, algorithmType);
    this.lastAlgorithmResponse = new AlgorithmResponse(scannedNodesInOrder, path, algorithmType);

    return this.lastAlgorithmResponse;
  }

  public getShortestPath(finishNode: Node, algorithmType: AlgorithmType) {
    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        return getDijkstraShortestPath(finishNode);
      case AlgorithmType.Astar:
        return getAstarShortestPath(finishNode);
      case AlgorithmType.BFS:
        return getBreadthFirstShortestPath(finishNode);
      case AlgorithmType.DFS:
        return getDepthFirstShortestPath(finishNode);
    }
  }

  // This function is necessary for this Angular implementation,
  // otherwise when we return the node list the final state is 
  // visualized instantly and therefore no animation is possible.
  // https://angular.io/guide/architecture#templates-directives-and-data-binding
  private uncheckAllNodes(grid: Array<Array<Node>>) {
    grid.forEach(row => {
      row.forEach(node => {
        if (!node.isStart) {
          node.hasBeenChecked = false;
          node.distance = Infinity;
        }
      });
    });
  }
}
