import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHopitauxComponent } from './list-hopitaux.component';

describe('ListHopitauxComponent', () => {
  let component: ListHopitauxComponent;
  let fixture: ComponentFixture<ListHopitauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHopitauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHopitauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
