import { Routes } from '@angular/router';
import { FacultadesUserComponent } from './pages/user/facultades-user/facultades-user.component';
import { FacultadesAdminComponent } from './pages/admin/facultades-admin/facultades-admin.component';
import { ProgramasAdminComponent } from './pages/admin/programas-admin/programas-admin.component';
import { SaberAdminComponent } from './pages/admin/saber-admin/saber-admin.component';
import { ProgramasUserComponent } from './pages/user/programas-user/programas-user.component';
import { SaberUserComponent } from './pages/user/saber-user/saber-user.component';

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
    path:'admin/programas/:facultad/estudiantes/saber/:prueba',
    component:SaberAdminComponent
  },
  {
    path:'user',
    component:FacultadesUserComponent
  },
  {
    path:'user/programas/:facultad',
    component:ProgramasUserComponent
  },
  {
    path:'user/programas/:facultad/estudiantes/saber/:prueba',
    component:SaberUserComponent
  },
];
