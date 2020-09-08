import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPanelLayoutComponent } from './chart-panel-layout.component';

describe('ChartPanelLayoutComponent', () => {
  let component: ChartPanelLayoutComponent;
  let fixture: ComponentFixture<ChartPanelLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPanelLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPanelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
