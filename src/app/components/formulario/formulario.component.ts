import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversidadServiceProvider } from '../../services/univserisad.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  imports: [FormsModule]
})
export class FormularioComponent implements OnInit{


  constructor(private universidadSrvice: UniversidadServiceProvider){}

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

}
