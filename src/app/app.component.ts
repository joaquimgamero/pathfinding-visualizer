import { Component } from '@angular/core';
import { GridService } from './services/grid.service';
import { AlgorithmType } from './enums/algorithmType.enum';
import { RenderService } from './services/render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding Algorithms Visualizer';

  constructor(private gridService: GridService, private renderService: RenderService) { }

  public clearAndReset() {
    this.gridService.clearAndReset();
  }

  public visualizeSelectedAlgorithm() {
    this.gridService.resetDistances();
    this.renderService.visualizeAlgorithm(AlgorithmType.Dijkstra);
  }
}
