import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroGastosPage } from './registro-gastos.page';

describe('RegistroGastosPage', () => {
  let component: RegistroGastosPage;
  let fixture: ComponentFixture<RegistroGastosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
