import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-facultad',
    standalone: true,
    templateUrl: './facultad.component.html',
    styleUrl: './facultad.component.css',
    imports: [FormularioComponent, RouterModule]
})
export class FacultadComponent implements OnInit{

  @Input() pk:number;
  @Input() user:string;
  @Input() logo:string | undefined;
  @Input() nombre:string;
  @Input() descripcion:string | undefined;

  formFacultadId="";
  confirmEliminaFac="";
  formFacultadFunction="Editar";

  ngOnInit(): void {
    if(this.pk !== undefined){
      this.formFacultadId="editaFac"+this.pk;
    }
  }
}
