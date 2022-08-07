import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanageproductComponent } from './adminmanageproduct.component';

describe('AdminmanageproductComponent', () => {
  let component: AdminmanageproductComponent;
  let fixture: ComponentFixture<AdminmanageproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmanageproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanageproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
