import { Component } from '@angular/core';
import { GridService } from './services/grid.service';
import { AlgorithmType } from './enums/algorithmType.enum';
import { RenderService } from './services/render.service';
import { Title } from '@angular/platform-browser';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TutorialComponent } from './tutorial/tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pathfinding Playground';

  constructor(private titleService: Title, private gridService: GridService, private renderService: RenderService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.setTitle('Pathfiding Playground');
    this.openTutorial();
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

  private openTutorial() {
    this.dialog.open(TutorialComponent, {
      height: '70vh',
      width: '50vw',
      disableClose: true,
      autoFocus: true
    });
  }
}
