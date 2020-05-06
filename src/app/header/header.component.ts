import { Component, OnInit, Input } from '@angular/core';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { GridService } from '../services/grid.service';
import { RenderService } from '../services/render.service';
import { Maze } from '../enums/mazes.enum';
import { AlgorithmsService } from '../services/algorithms.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  selectedAlgorithm: AlgorithmType;
  selectedMaze: Maze;
  allAlgorithms = [];
  allMazes = [];

  constructor(private gridService: GridService, private renderService: RenderService, private algorithmService: AlgorithmsService) { }

  ngOnInit(): void {
    this.allAlgorithms = Object.values(AlgorithmType);
    this.algorithmService.selectedAlgorithm = AlgorithmType.Dijkstra;
    this.selectedAlgorithm = AlgorithmType.Dijkstra;
    this.allMazes = Object.values(Maze);
  }

  public onClearAndReset() {
    this.algorithmService.lastAlgorithmResponse = null;
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

  public onSelectAlgorithm(newAlgorithm: AlgorithmType) {
    this.algorithmService.selectedAlgorithm = newAlgorithm;
    this.selectedAlgorithm = newAlgorithm;
  }

  public onSelectMaze(newMaze: Maze) {
    const selectedMaze = Object.keys(Maze)[this.allMazes.indexOf(newMaze)];
    this.gridService.applyMaze(selectedMaze);
  }

  public get renderInProgress(): boolean {
    return this.renderService.renderInProgress;
  }
}
