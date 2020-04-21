import { Component, OnInit } from '@angular/core';
import { RenderService } from '../services/render.service';
import { AlgorithmType } from '../enums/algorithmType.enum';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private renderService: RenderService) { }

  ngOnInit(): void { }

  public get scannedNodes(): number {
    if (this.canDisplayInfo) {
      return this.renderService.lastAlgorithmExecution.checkedNodesQuantity;
    }
  }

  public get pathLength(): number {
    if (this.canDisplayInfo) {
      return this.renderService.lastAlgorithmExecution.pathLength;
    }
  }

  public get objectiveFound(): boolean {
    if (this.canDisplayInfo) {
      return this.renderService.lastAlgorithmExecution.objectiveFound;
    }
  }

  public get algorithmType(): string {
    if (this.canDisplayInfo) {
      return AlgorithmType[this.renderService.lastAlgorithmExecution.type].toString();
    }
  }

  public get canDisplayInfo(): boolean {
    return this.renderService.lastAlgorithmExecution != undefined && !this.renderService.renderInProgress;
  }
}
