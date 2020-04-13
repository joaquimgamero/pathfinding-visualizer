import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { computeDijkstra } from '../algorithms/dijkstra'
import { getDijkstraShortestPath } from '../algorithms/dijkstra'

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor() { }

  public dijkstra(grid: Array<Array<Node>>, startNode: Node, finishNode: Node) {
    return computeDijkstra(grid, startNode, finishNode);
  }

  public getDijkstraShortestPath(finishNode: Node) {
    return getDijkstraShortestPath(finishNode);
  }
}
