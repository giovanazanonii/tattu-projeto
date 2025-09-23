import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  imagens: string[] = [
    '/home/capa4.jpg',
    '/home/capa3.jpg',
    '/home/capa5.jpg'
  ];

  index = 0;
  private intervalId: any;

  constructor(private router: Router) {}  // <-- injetamos o Router

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.imagens.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Método para navegar ao clicar no botão
  goToFormulario() {
    this.router.navigate(['/formulario-servico']);
  }
}
