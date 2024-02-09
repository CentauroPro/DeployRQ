import { Component } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrls: ['./form-profesor.component.css']
})
export class FormProfesorComponent {
  constructor(private servicio: ProfesoresService){}

  guardarProfesor(id:string, act1: string, act2: string, act3: string, prom:string){
   const ide:number=parseInt(id)
   const tem={
     "id":ide,
     "actividad 1": act1,
     "actividad 2": act2,
     "actividad 3": act3,
     "promedio ": prom,
   }
   this.servicio.postProfesor(tem).subscribe();
  }
 
  actualizarProfesor(id:string, act1: string, act2: string, act3: string, prom:string){
   const ide:number= parseInt(id)

   const tem={
     "id":ide,
     "actividad 1": act1,
     "actividad 2": act2,
     "actividad 3": act3,
     "promedio ": prom,
   }
   this.servicio.putProfesor(tem, ide).subscribe();
  }
  eliminarProfesor(id:string){
   const ide: number=parseInt(id)
   this.servicio.deleteProfesor(ide).subscribe();
  }
 
 
 }
 