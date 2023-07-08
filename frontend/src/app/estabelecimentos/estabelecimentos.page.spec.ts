import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstabelecimentosPage } from './estabelecimentos.page';

describe('EstabelecimentosPage', () => {
  let component: EstabelecimentosPage;
  let fixture: ComponentFixture<EstabelecimentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstabelecimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
