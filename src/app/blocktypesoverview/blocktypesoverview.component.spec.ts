import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktypesoverviewComponent } from './blocktypesoverview.component';

describe('BlocktypesoverviewComponent', () => {
  let component: BlocktypesoverviewComponent;
  let fixture: ComponentFixture<BlocktypesoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocktypesoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocktypesoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
