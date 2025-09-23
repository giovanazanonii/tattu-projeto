import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient  } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Authentication as AuthService } from '../services/authentication';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  email: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {} 

  onLogin() {
    this.http.post('http://localhost:3000/login', {email: this.email,senha: this.senha})
  .subscribe({
    next: (res: any) => {
      this.authService.login();
      this.router.navigate(['/home']);
    },
  error: (err) => {
      console.error('Erro no login:', err);
      this.mensagem = 'Dados inválidos.';
    }
  });
}

}
