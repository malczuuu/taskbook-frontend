import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAssigneeModalComponent } from './select-assignee-modal.component';

describe('SelectAssigneeModalComponent', () => {
  let component: SelectAssigneeModalComponent;
  let fixture: ComponentFixture<SelectAssigneeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAssigneeModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAssigneeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
