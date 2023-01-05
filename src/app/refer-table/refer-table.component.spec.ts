import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferTableComponent } from './refer-table.component';

describe('ReferTableComponent', () => {
  let component: ReferTableComponent;
  let fixture: ComponentFixture<ReferTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
