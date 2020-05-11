import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  page: number;
  maxPage: number = 8;

  constructor(private dialogRef: MatDialogRef<TutorialComponent>) { }

  ngOnInit(): void {
    this.page = 1;
  }

  onNextPage(): void {
    this.page++;
  }

  onPreviousPage(): void {
    this.page--;
  }

  close(): void {
    this.dialogRef.close();
  }

  get isLastPage() {
    return this.page == this.maxPage;
  }

  get closeButtonText() {
    return this.isLastPage ? 'Let\'s do it!' : 'Skip tutorial';
  }
}
