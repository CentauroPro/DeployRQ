import { Component } from '@angular/core';
import { LisEstudiantesService } from 'src/app/services/lis-estudiantes.service';



@Component({
  selector: 'app-lisestudiante',
  templateUrl: './lisestudiante.component.html',
  styleUrls: ['./lisestudiante.component.css']
})
export class LisestudianteComponent {

  constructor(private servicio: LisEstudiantesService) {}

  dataList: any;


  ngOnInit() {
    this.servicio.getList().subscribe((estudiante) => {
      this.dataList= estudiante;
    });
  }

}
