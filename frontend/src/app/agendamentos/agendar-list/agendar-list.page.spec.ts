import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarListPage } from './agendar-list.page';

describe('AgendarListPage', () => {
  let component: AgendarListPage;
  let fixture: ComponentFixture<AgendarListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendarListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
