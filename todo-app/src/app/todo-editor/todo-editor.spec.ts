import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditor } from './todo-editor';

describe('TodoEditor', () => {
  let component: TodoEditor;
  let fixture: ComponentFixture<TodoEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
