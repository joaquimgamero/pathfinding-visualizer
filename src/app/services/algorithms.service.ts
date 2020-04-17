import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { computeDijkstra } from '../algorithms/dijkstra'
import { getDijkstraShortestPath } from '../algorithms/dijkstra'
import { AlgorithmType } from '../enums/algorithmType.enum';
import { AlgorithmResponse } from '../models/algorithm-response';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor() { }

  public computeAlgorithm(grid: Array<Array<Node>>, startNode: Node, finishNode: Node, algorithmType: AlgorithmType): AlgorithmResponse {
    let objectiveFound = false;
    let pathLength = 0;
    let checkedNodes = [];
    let path = [];

    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        checkedNodes = computeDijkstra(grid, startNode, finishNode);
        path = this.getShortestPath(finishNode, AlgorithmType.Dijkstra);
    }

    return new AlgorithmResponse(checkedNodes, path, algorithmType);
  }

  public getShortestPath(finishNode: Node, algorithmType: AlgorithmType) {
    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        return getDijkstraShortestPath(finishNode);
      default:
        return false;
    }
  }

  private
}
