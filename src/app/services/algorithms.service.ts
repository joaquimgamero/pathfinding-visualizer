import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { dijkstra } from '../algorithms/dijkstra'

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor() { }

  public dijkstra(grid: Array<Array<Node>>, startNode: Node, finishNode: Node) {
    return dijkstra(grid, startNode, finishNode);
  }
}
