import { Component } from '@angular/core';
import { GridService } from './services/grid.service';

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

  public visualizeDijkstra() {
    this.gridService.visualizeDijkstra();
  }
}
