import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseUserPageComponent } from './browse-user-page.component';

describe('BrowseUserPageComponent', () => {
  let component: BrowseUserPageComponent;
  let fixture: ComponentFixture<BrowseUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseUserPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
