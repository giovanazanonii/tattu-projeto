import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  imports: [CommonModule],
  templateUrl: './depoimentos.html',
  styleUrl: './depoimentos.css'
})
export class DepoimentosComponent {
    testimonials = [
    { message: 'Excelente serviço! Minhas sapatilhas ficaram como novas.', author: 'Caio', rating: 5 },
    { message: 'Recomendo demais! Qualidade e cuidado em cada detalhe.', author: 'Thiago', rating: 2 },
    { message: 'Minhas sapatilhas duraram muito mais tempo. Sensacional!', author: 'Alisson', rating: 3 },
  ];
}
