import { Component } from '@angular/core';
import { CalificacionesService } from 'src/app/services/calificaciones.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent {

  constructor(private servicio: CalificacionesService) {}
  
  dataProfesores: any;

  ngOnInit() {
    this.servicio.getCalificacion().subscribe(calificacion => {
      this.dataProfesores = calificacion;
    })
  }
}