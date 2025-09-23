import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Marca {
  nome: string;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-sapatilhas',
  imports: [CommonModule],
  templateUrl: './sapatilhas.html',
  styleUrls: ['./sapatilhas.css']
})
export class SapatilhasComponent {
  marcas: Marca[] = [
    { nome: 'La Sportiva', imagem: 'sapatilhas/lasportiva.png', descricao: 'Marca italiana famosa por escalada e boulder.' },
    { nome: 'Scarpa', imagem: 'sapatilhas/scarpa.png', descricao: 'Clássico da escalada com ótima durabilidade.' },
    { nome: 'Five Ten', imagem: 'sapatilhas/fiveten.jpeg', descricao: 'Reconhecida por alta aderência e performance.' },
    { nome: 'Evolv', imagem: 'sapatilhas/evolv.png', descricao: 'Marca inovadora com modelos confortáveis.' },
    { nome: 'Tenaya', imagem: 'sapatilhas/tenaya.webp', descricao: 'Marca espanhola de sapatilhas técnicas.' },
    { nome: 'Mad Rock', imagem: 'sapatilhas/madrock.png', descricao: 'Sapatilhas acessíveis e versáteis, ideais para escaladores iniciantes e intermediários.'},
    { nome: 'Boreal', imagem: 'sapatilhas/boreal.png', descricao: 'Marca espanhola renomada, conhecida por conforto e durabilidade em escalada e boulder.' },
    { nome: 'Red Chilli', imagem: 'sapatilhas/redchilli.png', descricao: 'Marca alemã especializada em escalada, oferecendo ótima performance e ajuste.' },
  ];

  marcaSelecionada: Marca | null = null;

  abrirModal(marca: Marca) {
    this.marcaSelecionada = marca;
  }

  fecharModal() {
    this.marcaSelecionada = null;
  }
}
