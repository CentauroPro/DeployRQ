import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisestudianteComponent } from './lisestudiante.component';

describe('LisestudianteComponent', () => {
  let component: LisestudianteComponent;
  let fixture: ComponentFixture<LisestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
