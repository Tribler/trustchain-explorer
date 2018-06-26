import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecentblocksComponent } from './userrecentblocks.component';

describe('UserrecentblocksComponent', () => {
  let component: UserrecentblocksComponent;
  let fixture: ComponentFixture<UserrecentblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrecentblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrecentblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
