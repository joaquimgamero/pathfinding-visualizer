import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { computeDijkstra } from '../algorithms/dijkstra'
import { getDijkstraShortestPath } from '../algorithms/dijkstra'
import { computeAstar } from '../algorithms/a-star'
import { AlgorithmType } from '../enums/algorithmType.enum';
import { AlgorithmResponse } from '../models/algorithm-response';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  lastAlgorithmResponse: AlgorithmResponse;

  constructor() { }

  public computeAlgorithm(grid: Array<Array<Node>>, startNode: Node, finishNode: Node, algorithmType: AlgorithmType): AlgorithmResponse {
    let checkedNodes = [];

    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        checkedNodes = computeDijkstra(grid, startNode, finishNode);
        break;
      case AlgorithmType.Astar:
        checkedNodes = computeAstar(grid, startNode, finishNode);
        break;
    }

    let path = this.getShortestPath(finishNode, AlgorithmType.Dijkstra);
    this.lastAlgorithmResponse = new AlgorithmResponse(checkedNodes, path, algorithmType);

    return this.lastAlgorithmResponse;
  }

  public getShortestPath(finishNode: Node, algorithmType: AlgorithmType) {
    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        return getDijkstraShortestPath(finishNode);
      default:
        return false;
    }
  }

}
