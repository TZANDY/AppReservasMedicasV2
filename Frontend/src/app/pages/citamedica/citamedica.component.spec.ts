import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitamedicaComponent } from './citamedica.component';

describe('CitamedicaComponent', () => {
  let component: CitamedicaComponent;
  let fixture: ComponentFixture<CitamedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitamedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitamedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
