import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContasReceberPage } from './contas-receber.page';

describe('ContasReceberPage', () => {
  let component: ContasReceberPage;
  let fixture: ComponentFixture<ContasReceberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContasReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
