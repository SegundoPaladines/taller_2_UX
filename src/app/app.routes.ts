import { Routes } from '@angular/router';
import { FacultadesUserComponent } from './pages/user/facultades-user/facultades-user.component';
import { FacultadesAdminComponent } from './pages/admin/facultades-admin/facultades-admin.component';

export const routes: Routes = [
  {
    path:'admin',
    component:FacultadesAdminComponent
  },
  {
    path:'user',
    component:FacultadesUserComponent
  }
];
