import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SapatilhasComponent } from './sapatilhas/sapatilhas';
import { FormularioServicoComponent } from './formulario-servico/formulario-servico';
import {NotFoundComponent} from './not-found/not-found'
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'about', component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'formulario-servico', component: FormularioServicoComponent, canActivate: [AuthGuard]},
    {path:'sapatilhas', component: SapatilhasComponent},
    {path:'cadastro-clientes', component: CadastroClientesComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'**', component: NotFoundComponent}
];
