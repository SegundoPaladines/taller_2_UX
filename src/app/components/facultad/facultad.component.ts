import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
    selector: 'app-facultad',
    standalone: true,
    templateUrl: './facultad.component.html',
    styleUrl: './facultad.component.css',
    imports: [FormularioComponent]
})
export class FacultadComponent implements OnInit{

  @Input() pk:number;
  @Input() user:string;
  @Input() logo:string | undefined;
  @Input() nombre:string;
  @Input() descripcion:string | undefined;

  formFacultadId="";
  formFacultadFunction="Editar";

  ngOnInit(): void {
    if(this.pk !== undefined){
      this.formFacultadId="editaFac"+this.pk;
    }
  }

}
