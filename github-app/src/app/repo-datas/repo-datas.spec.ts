import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDatas } from './repo-datas';

describe('RepoDatas', () => {
  let component: RepoDatas;
  let fixture: ComponentFixture<RepoDatas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoDatas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDatas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
