import { Component } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  constructor(private servicio: ProfesoresService) {}
  
  dataProfesores: any;

  ngOnInit() {
    this.servicio.getProfesor().subscribe(profesor => {
      this.dataProfesores = profesor;
    })
  }
}