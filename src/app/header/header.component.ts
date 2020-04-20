import { Component, OnInit, Input } from '@angular/core';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { GridService } from '../services/grid.service';
import { RenderService } from '../services/render.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  selectedAlgorithm: AlgorithmType;
  allAlgorithms = [];

  constructor(private gridService: GridService, private renderService: RenderService) { }

  ngOnInit(): void {
    this.allAlgorithms = Object.keys(AlgorithmType).filter(e => !isNaN(+e)).map(o => { return { index: +o, name: AlgorithmType[o] } });
    this.selectedAlgorithm = AlgorithmType.Dijkstra;
  }

  public clearAndReset() {
    this.gridService.clearAndReset();
  }

  public visualizeAlgorithm() {
    console.log(this.selectedAlgorithm);
    this.gridService.resetDistances();
    this.renderService.visualizeAlgorithm(this.selectedAlgorithm);
  }

  public renderInProgress() {
    return this.renderService.renderInProgress;
  }
}
