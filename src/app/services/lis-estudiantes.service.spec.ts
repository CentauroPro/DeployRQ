import { TestBed } from '@angular/core/testing';

import { LisEstudiantesService } from './lis-estudiantes.service';

describe('LisEstudiantesService', () => {
  let service: LisEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LisEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
