import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversidadServiceProvider } from '../../services/univserisad.service';
import { Programa } from '../../clases/programa.model';

@Component({
  selector: 'app-prog-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prog-form.component.html',
  styleUrl: './prog-form.component.css',
  providers:[UniversidadServiceProvider]
})
export class ProgFormComponent implements OnInit{

  constructor(private universidadSrvice: UniversidadServiceProvider){}

  @Input() pk:number;
  @Input() facPK:number;
  @Input() idForm:string;
  @Input() funcion:string;

  nuevoNombre = "";
  alerta = "";
  alertTipe = "modal fade";

  programa:Programa;

  async ngOnInit(){
    await this.getPrograma();
  }

  async agregarPrograma(){
    if(this.nuevoNombre!==""){
      this.alerta = this.nuevoNombre + " Agregado con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.agregarPrograma(this.nuevoNombre, this.facPK);
      this.nuevoNombre = "";
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
    window.location.reload();
  }

  async getPrograma(){
    if(this.pk !== undefined){
      this.programa = await this.universidadSrvice.getPrograma(this.pk);
      this.nuevoNombre = this.programa.nombre;
    }
  }

  async editarPrograma(){
    if(this.nuevoNombre!==""){
      this.alerta = this.nuevoNombre + " Actualizado con Exito";
      this.alertTipe = "alert alert-success";
      await this.universidadSrvice.editarPrograma(this.pk, this.facPK, this.nuevoNombre);
    }else{
      this.alerta = "El campo nombre no puede ser Vacio";
      this.alertTipe = "alert alert-danger";
    }
    window.location.reload();
  }

  async eliminarPrograma(){
    await this.universidadSrvice.eliminarPrograma(this.pk, this.facPK);
    window.location.reload();
  }
}
