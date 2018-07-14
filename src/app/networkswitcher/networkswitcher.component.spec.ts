import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkswitcherComponent } from './networkswitcher.component';

describe('NetworkswitcherComponent', () => {
  let component: NetworkswitcherComponent;
  let fixture: ComponentFixture<NetworkswitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkswitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
