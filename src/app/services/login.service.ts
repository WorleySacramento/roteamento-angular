import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

    private email: string = 'usuario@exemplo.com';
  private password: string = '12345';
  logado: boolean = false;

  login(email: string, password: string): boolean {
    if (email === this.email && password === this.password) {
      this.logado = true;
    } 
    return this.logado;
  }

  logout(): void {
    this.logado = false;
  }

}
