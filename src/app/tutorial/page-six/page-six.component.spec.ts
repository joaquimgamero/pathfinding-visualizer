import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSixComponent } from './page-six.component';

describe('PageSixComponent', () => {
  let component: PageSixComponent;
  let fixture: ComponentFixture<PageSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
