import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor(private servicio: CursosService) {}
  
  dataProfesor: any;

  ngOnInit() {
    this.servicio.getCurso().subscribe(curso => {
      this.dataProfesor = curso;
    })
  }
}
