import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasDetailComponent } from './recetas-detail.component';

describe('RecetasDetailComponent', () => {
  let component: RecetasDetailComponent;
  let fixture: ComponentFixture<RecetasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
