import { Component, OnInit } from '@angular/core';
import { Node } from '../models/node';
import { NodeType } from '../enums/nodeType.enum';
import { GridService } from '../services/grid.service';
import { AlgorithmsService } from '../services/algorithms.service';
import { AlgorithmType } from '../enums/algorithmType.enum';

@Component({
  selector: 'legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  emptyNode: Node;
  scannedNode: Node;
  obstacleNode: Node;
  pathNode: Node;

  constructor(private gridService: GridService, private algorithmService: AlgorithmsService) {
  }

  ngOnInit(): void {
    this.emptyNode = new Node(0, 0, this.gridService);
    this.scannedNode = new Node(0, 0, this.gridService);
    this.obstacleNode = new Node(0, 0, this.gridService);
    this.pathNode = new Node(0, 0, this.gridService);
  }

  public get description(): string {
    switch (this.selectedAlgorithm) {
      case AlgorithmType.Dijkstra:
        return "Dijkstra’s algorithm finds a shortest path tree from a single source node, by building a set of nodes that have minimum distance from the source.";
      case AlgorithmType.Astar:
        return "What makes A* different and better for many searches is that it uses a heuristic function, which differs from an algorithm in that a heuristic is more of an estimate and is not necessarily provably correct.";
      case AlgorithmType.BFS:
        return "Breadth-first search starts by searching a start node, followed by its adjacent nodes, then all nodes that can be reached by a path from the start node containing two edges, three edges, and so on.";
      case AlgorithmType.DFS:
        return "The main strategy of depth-first search is to explore deeper into the graph whenever possible. If it is known that an answer will likely be found far into a tree, DFS is a better option than BFS. DFS does not gaurantee an optimal solution."
    }
  }

  public get selectedAlgorithm(): AlgorithmType {
    return this.algorithmService.selectedAlgorithm;
  }
}
