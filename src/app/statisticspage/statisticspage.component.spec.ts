import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticspageComponent } from './statisticspage.component';

describe('StatisticspageComponent', () => {
  let component: StatisticspageComponent;
  let fixture: ComponentFixture<StatisticspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
