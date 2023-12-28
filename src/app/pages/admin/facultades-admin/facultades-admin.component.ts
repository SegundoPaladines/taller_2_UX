import { Component, OnInit } from '@angular/core';
import { Facultad } from '../../../clases/facultad.model';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { FormularioComponent } from "../../../components/formulario/formulario.component";
import { FacultadComponent } from "../../../components/facultad/facultad.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-facultades-admin',
    standalone: true,
    templateUrl: './facultades-admin.component.html',
    styleUrl: './facultades-admin.component.css',
    providers: [UniversidadServiceProvider],
    imports: [FormularioComponent, FacultadComponent, RouterModule]
})
export class FacultadesAdminComponent implements OnInit{
  facultades: Facultad[] = [];
  formFacultadId = "facultadForm";
  formFacultadFunction = "Agregar";

  constructor(private universidadService:UniversidadServiceProvider){};

  async ngOnInit(){
    await this.getFacultades();
    this.universidadService.facultadesActualizadas.subscribe((facultades:Facultad[])=>{
      this.facultades = facultades;
    });
  }

  async getFacultades(){
    this.facultades = await this.universidadService.getFacultades();
  }
}
