import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversidadServiceProvider } from '../../services/univserisad.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  imports: [FormsModule],
  providers:[UniversidadServiceProvider]
})
export class FormularioComponent implements OnInit{

  constructor(private universidadSrvice: UniversidadServiceProvider){}

  @Input() pk:number;
  @Input() idForm:string;
  @Input() funcion:string;
  @Input() nombre:string | undefined;

  nuevoNombre = "";
  alerta = "";
  alertTipe = "modal fade";

  ngOnInit(): void {
    if(this.nombre !== undefined){
      this.nuevoNombre = this.nombre;
    }
  }

  async agregarFacultad(){
    if(this.nuevoNombre!==""){
      this.alerta = this.nuevoNombre + " Agregada con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.agregarFacultad(this.nuevoNombre);
      this.nuevoNombre = "";
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
  }

  async editarFacultad(){
    if(this.nuevoNombre!==""){
      if(this.pk){
        this.alerta = "Nuevo nombre "+this.nuevoNombre + " registrado con Exito";
        this.alertTipe = "alert alert-success";
        await this.universidadSrvice.editarFacultad(this.pk, this.nuevoNombre);
      }else{
        this.alerta = "Error inesperado campo PK Vacio";
        this.alertTipe = "alert alert-danger";
      }
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
  }

  async eliminarFacultad(){
    if(this.pk){
      this.alerta = "Facultad "+this.nuevoNombre + " eliminada con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.eliminarFacultad(this.pk);
      window.location.reload();
    }else{
      this.alerta = "Error inesperado campo PK Vacio";
      this.alertTipe = "alert alert-danger";
    }
  }
}
