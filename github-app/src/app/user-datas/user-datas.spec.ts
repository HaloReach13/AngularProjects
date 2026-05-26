import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatas } from './user-datas';

describe('UserDatas', () => {
  let component: UserDatas;
  let fixture: ComponentFixture<UserDatas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDatas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDatas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
