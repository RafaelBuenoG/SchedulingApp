import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhasAgendasPage } from './minhas-agendas.page';

describe('MinhasAgendasPage', () => {
  let component: MinhasAgendasPage;
  let fixture: ComponentFixture<MinhasAgendasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MinhasAgendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
