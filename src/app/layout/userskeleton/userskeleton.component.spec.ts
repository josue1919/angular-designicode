import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserskeletonComponent } from './userskeleton.component';

describe('UserskeletonComponent', () => {
  let component: UserskeletonComponent;
  let fixture: ComponentFixture<UserskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserskeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
