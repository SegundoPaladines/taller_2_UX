import { Component, Input } from '@angular/core';
import { UniversidadServiceProvider } from '../../services/univserisad.service';
import { Estudiante } from '../../clases/estudiante.model';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-estudiantes',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet],
  templateUrl: './form-estudiantes.component.html',
  styleUrl: './form-estudiantes.component.css',
  providers:[UniversidadServiceProvider]
})
export class FormEstudiantesComponent {
  constructor(private universidadSrvice: UniversidadServiceProvider){}

  @Input() pk:number;
  @Input() progPK:number;
  @Input() idForm:string;
  @Input() funcion:string;

  nuevoNombre = "";
  alerta = "";
  alertTipe = "modal fade";

  estudiante:Estudiante;

  async ngOnInit(){
    await this.getEstudiante();
  }

  async agregarEstudiante(){
    if(this.nuevoNombre!==""){
      this.alerta = this.nuevoNombre + " Agregado con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.agregarEstudiante(this.nuevoNombre, this.progPK);
      this.nuevoNombre = "";
      window.location.reload();
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
  }

  async getEstudiante(){
    if(this.pk !== undefined){
      this.estudiante = await this.universidadSrvice.getEstudiante(this.pk);
      this.nuevoNombre = this.estudiante.nombre;
    }
  }

  async actualizarEstudiante(){
    if(this.nuevoNombre!==""){
      this.alerta = this.nuevoNombre + " Actualizado con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.editarEstudiante(this.pk, this.progPK ,this.nuevoNombre);
      this.nuevoNombre = "";
      window.location.reload();
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
  }
  async eliminarEstudiante(){
    if(this.pk !== undefined){
      this.alerta = this.nuevoNombre + " eliminado con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.eliminarEstudiante(this.pk, this.progPK);
      window.location.reload();
    }
  }
}
