import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrofornecedorPage } from './cadastrofornecedor.page';

describe('CadastrofornecedorPage', () => {
  let component: CadastrofornecedorPage;
  let fixture: ComponentFixture<CadastrofornecedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrofornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
