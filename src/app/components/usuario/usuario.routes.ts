import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const USER_ROUTES: Routes = [
  {path: 'new', component:UsuarioNuevoComponent },
      {path: 'edit', component:UsuarioEditarComponent },
      {path: 'detail', component:UsuarioDetalleComponent },
      {path: '**', pathMatch:'full', redirectTo:'new' },
]
