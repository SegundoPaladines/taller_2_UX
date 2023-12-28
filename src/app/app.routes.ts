import { Routes } from '@angular/router';
import { FacultadesUserComponent } from './pages/user/facultades-user/facultades-user.component';
import { FacultadesAdminComponent } from './pages/admin/facultades-admin/facultades-admin.component';
import { ProgramasAdminComponent } from './pages/admin/programas-admin/programas-admin.component';

export const routes: Routes = [
  {
    path:'admin',
    component:FacultadesAdminComponent
  },
  {
    path:'admin/programas/:facultad',
    component:ProgramasAdminComponent
  },
  {
    path:'user',
    component:FacultadesUserComponent
  }
];
