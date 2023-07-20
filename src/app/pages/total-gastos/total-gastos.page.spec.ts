import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalGastosPage } from './total-gastos.page';

describe('TotalGastosPage', () => {
  let component: TotalGastosPage;
  let fixture: ComponentFixture<TotalGastosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
