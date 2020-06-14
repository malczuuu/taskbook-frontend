import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardsPageComponent } from './boards-page.component';

describe('BoardsPageComponent', () => {
  let component: BoardsPageComponent;
  let fixture: ComponentFixture<BoardsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
