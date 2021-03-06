import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../services/grid.service';
import { Node } from '../models/node';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;


  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    this.gridService.initializeGrid(this.width, this.height);
  }

  public getNodesInRow(row: number): Array<Node> {
    return this.gridService.grid[row];
  }

  public get nodes(): Array<Array<Node>> {
    return this.gridService.grid;
  }

  public onToggleMouseState() {
    this.gridService.mouseIsBeingPressed = !this.gridService.mouseIsBeingPressed;
  }

  public onMouseLeave() {
    this.gridService.mouseIsBeingPressed = false;
  }
}
