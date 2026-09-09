import { TestBed } from '@angular/core/testing';

import { UsuarioLogadoGuard } from './usuario-logado.guard';

describe('UsuarioLogadoGuard', () => {
  let guard: UsuarioLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
