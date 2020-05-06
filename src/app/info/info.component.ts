import { Component, OnInit } from '@angular/core';
import { RenderService } from '../services/render.service';
import { AlgorithmType } from '../enums/algorithmType.enum';
import { AlgorithmsService } from '../services/algorithms.service';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private algorithmService: AlgorithmsService, private renderService: RenderService) { }

  ngOnInit(): void { }

  public get scannedNodes(): number {
    if (this.canDisplayInfo) {
      return this.algorithmService.lastAlgorithmResponse.checkedNodesQuantity;
    }
  }

  public get pathLength(): number {
    if (this.canDisplayInfo) {
      return this.algorithmService.lastAlgorithmResponse.pathLength;
    }
  }

  public get objectiveFound(): boolean {
    if (this.canDisplayInfo) {
      return this.algorithmService.lastAlgorithmResponse.objectiveFound;
    }
  }

  public get algorithmType(): string {
    if (this.canDisplayInfo) {
      return this.algorithmService.lastAlgorithmResponse.type;
    }
  }

  public get canDisplayInfo(): boolean {
    return this.algorithmService.lastAlgorithmResponse && !this.renderService.renderInProgress;
  }

  public get rendering(): boolean {
    return this.renderService.renderInProgress;
  }
}
