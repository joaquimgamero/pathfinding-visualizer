import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../models/node';
import { NodeType } from 'src/app/enums/nodeType.enum';
import { GridService } from 'src/app/services/grid.service';
import { RenderService } from 'src/app/services/render.service';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;

  nodeType: typeof NodeType = NodeType;

  constructor(private gridService: GridService, private renderService: RenderService) {
  }

  ngOnInit(): void {
  }

  public onMouseOver(nodeType: NodeType) {
    if (this.gridService.mouseIsBeingPressed) {
      this.onChangeState(nodeType);
    }
  }

  public onChangeState(nodeType: NodeType) {
    if (!this.renderService.renderInProgress) {
      this.node.toggleType(nodeType);
    }
  }

  public logInfo() {
    console.log(this.node);
  }
}
