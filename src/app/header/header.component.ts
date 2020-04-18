import { Component, OnInit, Input } from '@angular/core';
import { AlgorithmType } from '../enums/algorithmType.enum';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  selectedAlgorithm: string;
  allAlgorithms: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    Object.values(AlgorithmType).forEach(algorithm => {
      if (typeof (algorithm) === 'string') this.allAlgorithms.push(algorithm.toString());
    });

    this.selectedAlgorithm = this.allAlgorithms[0];
  }

  public visualizeAlgorithm() {
    console.log(Object.values(AlgorithmType));
  }
}
