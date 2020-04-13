import { Component } from '@angular/core';
import { GridService } from './services/grid.service';
import { AlgorithmType } from './enums/algorithmType.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding Algorithms Visualizer';

  constructor(private gridService: GridService) { }

  public clearAndReset() {
    this.gridService.clearAndReset();
  }

  public visualizeSelectedAlgorithm() {
    this.gridService.visualizeAlgorithm(AlgorithmType.Dijkstra);
  }
}
