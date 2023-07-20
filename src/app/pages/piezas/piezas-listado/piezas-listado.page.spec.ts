import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiezasListadoPage } from './piezas-listado.page';

describe('PiezasListadoPage', () => {
  let component: PiezasListadoPage;
  let fixture: ComponentFixture<PiezasListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PiezasListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
