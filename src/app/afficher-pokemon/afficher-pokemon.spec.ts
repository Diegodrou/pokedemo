import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPokemon } from './afficher-pokemon';

describe('AfficherPokemon', () => {
  let component: AfficherPokemon;
  let fixture: ComponentFixture<AfficherPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficherPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
