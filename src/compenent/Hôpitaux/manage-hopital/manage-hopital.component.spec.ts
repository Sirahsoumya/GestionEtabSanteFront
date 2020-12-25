import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHopitalComponent } from './manage-hopital.component';

describe('ManageHopitalComponent', () => {
  let component: ManageHopitalComponent;
  let fixture: ComponentFixture<ManageHopitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHopitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
