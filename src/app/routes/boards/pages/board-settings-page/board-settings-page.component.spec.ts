import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardSettingsPageComponent } from './board-settings-page.component';

describe('BoardSettingsPageComponent', () => {
  let component: BoardSettingsPageComponent;
  let fixture: ComponentFixture<BoardSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardSettingsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
