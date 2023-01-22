import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelLoggedInComponent } from './client-panel-logged-in.component';

describe('ClientPanelLoggedInComponent', () => {
  let component: ClientPanelLoggedInComponent;
  let fixture: ComponentFixture<ClientPanelLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPanelLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPanelLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
