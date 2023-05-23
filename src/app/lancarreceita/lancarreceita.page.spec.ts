import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LancarreceitaPage } from './lancarreceita.page';

describe('LancarreceitaPage', () => {
  let component: LancarreceitaPage;
  let fixture: ComponentFixture<LancarreceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LancarreceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
