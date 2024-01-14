import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfTicketsComponent } from './table-of-tickets.component';

describe('TableOfTicketsComponent', () => {
  let component: TableOfTicketsComponent;
  let fixture: ComponentFixture<TableOfTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableOfTicketsComponent]
    });
    fixture = TestBed.createComponent(TableOfTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
