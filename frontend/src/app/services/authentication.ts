import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
    constructor() {}

    login() {
      localStorage.setItem('logado', 'true');
    }

    logout() {
      localStorage.removeItem('logado');
    }

    isLogged(): boolean {
      return localStorage.getItem('logado') === 'true';
    }
}
