import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar";
import { FooterComponent } from "./footer/footer";
import { FormsModule } from '@angular/forms'; 
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found';
import { LoginComponent } from './login/login';
import { AlertComponent } from './alert/alert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FormsModule, CommonModule, HttpClientModule, AlertComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showNavbar = true;
  showFooter = true;
  alertMessage: string | null = null;

  showAlert(msg: string) {
    this.alertMessage = msg;
    setTimeout(() => this.alertMessage = null, 5000);
  } 

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getChild(this.activatedRoute);
        const component = currentRoute.snapshot.component as any;

        // Footer escondido no Login e no 404
        this.showFooter = component !== NotFoundComponent && component !== LoginComponent;

        // Navbar escondido apenas no 404
        this.showNavbar = component !== NotFoundComponent;
      });
  }

  getChild(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getChild(route.firstChild);
    }
    return route;
  }
}
