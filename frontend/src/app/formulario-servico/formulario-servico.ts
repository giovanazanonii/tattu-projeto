import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-servico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-servico.html',
  styleUrls: ['./formulario-servico.css']
})
export class FormularioServicoComponent {

  showAlert = false;

  tiposServico = [
    'Pré-análise',
    'Ressola Completa'
  ];

  pedido = {
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    fotos: [] as File[]
  };

  enviarFormulario() {
  this.showAlert = true;

  this.pedido = { nome: '', email: '', telefone: '', servico: '', fotos: [] };

  setTimeout(() => {
    this.showAlert = false;
  }, 5000);
}

  onFileSelected(event: any) {
    if (event.target.files) {
      this.pedido.fotos = Array.from(event.target.files);
    }
  }
}
