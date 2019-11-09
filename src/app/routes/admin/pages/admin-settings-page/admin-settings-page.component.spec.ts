import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingsPageComponent } from './admin-settings-page.component';

describe('AdminSettingsPageComponent', () => {
  let component: AdminSettingsPageComponent;
  let fixture: ComponentFixture<AdminSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
