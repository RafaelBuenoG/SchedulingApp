import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarFormPage } from './agendar-form.page';

describe('AgendarFormPage', () => {
  let component: AgendarFormPage;
  let fixture: ComponentFixture<AgendarFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendarFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
