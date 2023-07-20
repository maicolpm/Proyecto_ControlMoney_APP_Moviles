import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroIngresosPage } from './registro-ingresos.page';

describe('RegistroIngresosPage', () => {
  let component: RegistroIngresosPage;
  let fixture: ComponentFixture<RegistroIngresosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
