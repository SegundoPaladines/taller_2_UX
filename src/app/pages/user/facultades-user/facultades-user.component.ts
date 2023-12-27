import { Component, OnInit } from '@angular/core';
import { Facultad } from '../../../clases/facultad.model';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { FacultadComponent } from "../../../components/facultad/facultad.component";

@Component({
  selector: 'app-facultades-user',
  standalone: true,
  templateUrl: './facultades-user.component.html',
  styleUrl: './facultades-user.component.css',
  providers: [UniversidadServiceProvider],
  imports: [FacultadComponent]
})
export class FacultadesUserComponent implements OnInit{
  facultades: Facultad[] = [];

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
