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
    this.allAlgorithms = Object.values(AlgorithmType);
    this.selectedAlgorithm = AlgorithmType.Dijkstra;
  }

  public onClearAndReset() {
    this.renderService.lastAlgorithmExecution = null;
    this.gridService.clearAndReset();
  }

  public onRemoveObstacles() {
    this.gridService.removeObstacles();
  }

  public onRemovePath() {
    this.gridService.removeRoute();
  }

  public onRemoveScanned() {
    this.gridService.removeScanned();
  }

  public onVisualizeAlgorithm() {
    this.gridService.resetDistances();
    this.renderService.visualizeAlgorithm(this.selectedAlgorithm);
  }

  public get renderInProgress(): boolean {
    return this.renderService.renderInProgress;
  }
}
