import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseIssuePageComponent } from './browse-issue-page.component';

describe('BrowseIssuePageComponent', () => {
  let component: BrowseIssuePageComponent;
  let fixture: ComponentFixture<BrowseIssuePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseIssuePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseIssuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
