import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendDetailsComponent } from './legend-details.component';

describe('LegendDetailsComponent', () => {
  let component: LegendDetailsComponent;
  let fixture: ComponentFixture<LegendDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
