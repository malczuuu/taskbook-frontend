import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBoardPageComponent } from './create-board-page.component';

describe('CreateBoardPageComponent', () => {
  let component: CreateBoardPageComponent;
  let fixture: ComponentFixture<CreateBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoardPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
