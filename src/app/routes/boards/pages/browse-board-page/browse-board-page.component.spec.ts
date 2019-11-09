import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseBoardPageComponent } from './browse-board-page.component';

describe('BrowseBoardPageComponent', () => {
  let component: BrowseBoardPageComponent;
  let fixture: ComponentFixture<BrowseBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseBoardPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
