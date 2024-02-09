import { Component } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  constructor(private servicio: EstudiantesService) {}
  
  dataProfesores: any;

  ngOnInit() {
    this.servicio.getEstudiante().subscribe(estudiante => {
      this.dataProfesores= estudiante;
    })
  }
}