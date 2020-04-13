import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { computeDijkstra } from '../algorithms/dijkstra'
import { getDijkstraShortestPath } from '../algorithms/dijkstra'
import { AlgorithmType } from '../enums/algorithmType.enum';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor() { }

  public computeAlgorithm(grid: Array<Array<Node>>, startNode: Node, finishNode: Node, algorithmType: AlgorithmType) {
    switch (algorithmType) {
      case AlgorithmType.Dijkstra:
        return computeDijkstra(grid, startNode, finishNode);
      default:
        return false;
    }
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
