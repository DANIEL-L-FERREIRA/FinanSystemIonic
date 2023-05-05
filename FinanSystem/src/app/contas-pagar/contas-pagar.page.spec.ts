import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContasPagarPage } from './contas-pagar.page';

describe('ContasPagarPage', () => {
  let component: ContasPagarPage;
  let fixture: ComponentFixture<ContasPagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContasPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
