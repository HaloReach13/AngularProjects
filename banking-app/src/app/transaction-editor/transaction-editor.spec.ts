import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEditor } from './transaction-editor';

describe('TransactionEditor', () => {
  let component: TransactionEditor;
  let fixture: ComponentFixture<TransactionEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
