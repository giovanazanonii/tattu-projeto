import { Component } from '@angular/core';
import { HeroComponent } from '../footer/components/hero/hero';
import { ServicesComponent } from '../footer/components/services/services';
import { GalleryComponent } from '../footer/components/gallery/gallery';
import { CareComponent } from '../footer/components/care/care';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, GalleryComponent, CareComponent], //importando componentes de outros arquivos para que possam ser utilizados no home.html
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}
