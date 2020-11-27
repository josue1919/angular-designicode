import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoRecetaComponent } from './registo-receta.component';

describe('RegistoRecetaComponent', () => {
  let component: RegistoRecetaComponent;
  let fixture: ComponentFixture<RegistoRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistoRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
