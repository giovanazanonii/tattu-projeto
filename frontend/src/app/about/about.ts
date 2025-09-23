import { Component } from '@angular/core';
import { DiferencialComponent } from './diferencial/diferencial';
import { QuemSomosComponent } from './quem-somos/quem-somos';
import { TattuCardComponent } from './tattu-card/tattu-card'; 
import { DepoimentosComponent } from './depoimentos/depoimentos';

@Component({
  selector: 'app-about',
  imports: [DiferencialComponent, QuemSomosComponent, TattuCardComponent, DepoimentosComponent],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

}
