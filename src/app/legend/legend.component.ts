import { Component, OnInit } from '@angular/core';
import { Node } from '../models/node';
import { NodeType } from '../enums/nodeType.enum';
import { GridService } from '../services/grid.service';

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

  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    this.emptyNode = new Node(0, 0, this.gridService);
    this.scannedNode = new Node(0, 0, this.gridService);
    this.obstacleNode = new Node(0, 0, this.gridService);
    this.pathNode = new Node(0, 0, this.gridService);

    // this.scannedNode.hasBeenChecked = true;
    // this.obstacleNode.toggleType(NodeType.Obstacle);
    // this.pathNode.isRoute = true;
  }

}
