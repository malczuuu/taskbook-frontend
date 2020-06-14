import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListPageComponent } from './users-list-page.component';

describe('UsersListPageComponent', () => {
  let component: UsersListPageComponent;
  let fixture: ComponentFixture<UsersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
