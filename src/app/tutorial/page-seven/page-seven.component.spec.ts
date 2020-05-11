import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSevenComponent } from './page-seven.component';

describe('PageSevenComponent', () => {
  let component: PageSevenComponent;
  let fixture: ComponentFixture<PageSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
