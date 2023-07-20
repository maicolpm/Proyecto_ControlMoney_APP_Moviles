import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalIngresosPage } from './total-ingresos.page';

describe('TotalIngresosPage', () => {
  let component: TotalIngresosPage;
  let fixture: ComponentFixture<TotalIngresosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
