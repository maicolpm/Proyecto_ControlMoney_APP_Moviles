import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaIngresosPage } from './lista-ingresos.page';

describe('ListaIngresosPage', () => {
  let component: ListaIngresosPage;
  let fixture: ComponentFixture<ListaIngresosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
