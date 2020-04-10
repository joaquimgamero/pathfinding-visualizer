import { Component, OnInit, Input } from '@angular/core';
import { NodeComponent } from './node/node.component';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;

  nodes: Array<NodeComponent> = new Array();

  constructor() { }

  ngOnInit(): void {
    // Rows
    for (let i = 0; i < this.width; i++) {
      // Cols
      for (let j = 0; j < this.height; j++) {
        this.nodes[i] = new NodeComponent();
      }
    }
  }

}
