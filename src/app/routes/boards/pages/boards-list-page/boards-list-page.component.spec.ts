import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardsListPageComponent } from './boards-list-page.component';

describe('BoardsListPageComponent', () => {
  let component: BoardsListPageComponent;
  let fixture: ComponentFixture<BoardsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardsListPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
