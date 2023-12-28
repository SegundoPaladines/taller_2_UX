import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Estudiante } from '../../../clases/estudiante.model';
import { UniversidadServiceProvider } from '../../../services/univserisad.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-estudiantes-user',
  standalone: true,
  providers: [UniversidadServiceProvider],
  imports: [FormsModule, RouterOutlet, RouterModule],
  templateUrl: './estudiantes-user.component.html',
  styleUrl: './estudiantes-user.component.css'
})
export class EstudiantesUserComponent implements OnChanges, OnInit{
  @Input() programaPk: number;

  estudiantes: Estudiante[] = [];
  estudiantePK: number | undefined;

  idForm = "";

  constructor(private universidadService: UniversidadServiceProvider) {}

  async ngOnInit(){
    await this.actualizarEstudiantes();

    this.universidadService.programaActualizado.subscribe(async (pk) => {
      this.programaPk = pk;
      await this.actualizarEstudiantes();
    });
    if(this.estudiantes.length > 0){
      this.estudiantePK = this.estudiantes[0].pk;
      this.idForm = this.estudiantePK+"estudianteForm";
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    await this.actualizarEstudiantes();
  }

  async actualizarEstudiantes() {
    if (this.programaPk !== undefined) {
      this.estudiantes = await this.universidadService.getEstudiantesProg(this.programaPk);
      this.idForm = this.estudiantePK+"estudianteForm";
    }
    if(this.estudiantes.length > 0){
      this.estudiantePK = this.estudiantes[0].pk;
      this.idForm = this.estudiantePK+"estudianteForm";
    }
  }
  actualizarIDForm(){
    if(this.estudiantePK !== undefined){
      this.idForm = this.estudiantePK+"estudianteForm";
    }
  }
}
