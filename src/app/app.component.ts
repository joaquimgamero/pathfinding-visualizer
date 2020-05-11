import { Component } from '@angular/core';
import { GridService } from './services/grid.service';
import { AlgorithmType } from './enums/algorithmType.enum';
import { RenderService } from './services/render.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding Playground';

  constructor(private titleService: Title, private gridService: GridService, private renderService: RenderService) { }

  ngOnInit(): void {
    this.setTitle('Pathfiding Playground');
  }

  public clearAndReset() {
    this.gridService.clearAndReset();
  }

  public visualizeSelectedAlgorithm() {
    this.gridService.resetDistances();
    this.renderService.visualizeAlgorithm(AlgorithmType.Dijkstra);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
