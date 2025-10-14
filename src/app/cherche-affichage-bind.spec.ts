import { TestBed } from '@angular/core/testing';

import { ChercheAffichageBind } from './cherche-affichage-bind';

describe('ChercheAffichageBind', () => {
  let service: ChercheAffichageBind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChercheAffichageBind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
