import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecetaComponent } from './card-receta.component';

describe('CardRecetaComponent', () => {
  let component: CardRecetaComponent;
  let fixture: ComponentFixture<CardRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
