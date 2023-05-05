import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancardespesaPage } from './lancardespesa.page';

describe('LancardespesaPage', () => {
  let component: LancardespesaPage;
  let fixture: ComponentFixture<LancardespesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancardespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
