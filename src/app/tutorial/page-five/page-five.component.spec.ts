import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFiveComponent } from './page-five.component';

describe('PageFiveComponent', () => {
  let component: PageFiveComponent;
  let fixture: ComponentFixture<PageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
