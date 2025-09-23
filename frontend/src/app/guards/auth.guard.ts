import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Authentication as AuthService } from '../services/authentication';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.alertService.show('Por favor, efetue login ou cadastre-se para solicitar um serviço.');
      return false;
    }
  }
}
