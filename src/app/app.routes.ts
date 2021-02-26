import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USER_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  {path: 'home', component:HomeComponent },
  {
    path: 'user/:id',
    component:UsuarioComponent,
    children: USER_ROUTES },
  {path: '**', pathMatch:'full', redirectTo:'home' },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
