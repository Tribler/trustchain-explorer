import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentblocksComponent } from './recentblocks.component';

describe('RecentblocksComponent', () => {
  let component: RecentblocksComponent;
  let fixture: ComponentFixture<RecentblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
