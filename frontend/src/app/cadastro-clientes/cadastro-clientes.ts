import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-clientes.html',
  styleUrls: ['./cadastro-clientes.css']
})
export class CadastroClientesComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  rua: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  cep: string = '';
  telefone: string = '';
  mensagem: string = '';

  onCadastro() {
    if (this.senha !== this.confirmarSenha) {
      this.mensagem = 'As senhas não coincidem!';
      return;
    }

    // Aqui você chamaria o serviço de cadastro
    this.mensagem = 'Cadastro realizado com sucesso!';
  }
}
