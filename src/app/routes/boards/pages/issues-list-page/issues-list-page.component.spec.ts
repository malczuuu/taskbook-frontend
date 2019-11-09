import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesListPageComponent } from './issues-list-page.component';

describe('IssuesListPageComponent', () => {
  let component: IssuesListPageComponent;
  let fixture: ComponentFixture<IssuesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesListPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
