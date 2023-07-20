import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiezasAddEditPage } from './piezas-add-edit.page';

describe('PiezasAddEditPage', () => {
  let component: PiezasAddEditPage;
  let fixture: ComponentFixture<PiezasAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PiezasAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
