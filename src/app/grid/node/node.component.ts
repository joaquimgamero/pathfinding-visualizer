import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
