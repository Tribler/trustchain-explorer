import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockdetailsComponent } from './blockdetails.component';

describe('BlockdetailsComponent', () => {
  let component: BlockdetailsComponent;
  let fixture: ComponentFixture<BlockdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
