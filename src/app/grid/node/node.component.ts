import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../models/node';
import { NodeType } from 'src/app/enums/nodeType.enum';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;

  nodeType: typeof NodeType = NodeType;

  constructor(private gridService: GridService) {
  }

  ngOnInit(): void {
  }

  public onMouseOver(nodeType: NodeType) {
    if (this.gridService.mouseIsBeingPressed) {
      this.onChangeState(nodeType);
    }
  }

  public onChangeState(nodeType: NodeType) {
    this.node.toggleType(nodeType);
  }
}
