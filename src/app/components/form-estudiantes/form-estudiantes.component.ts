import { Component } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-form-estudiantes',
  templateUrl: './form-estudiantes.component.html',
  styleUrls: ['./form-estudiantes.component.css'],
})
export class FormEstudiantesComponent {
  constructor(private servicio: EstudiantesService) {}

  calcularPromedio(nota1: string, nota2: string, nota3: string): string {
    const promedio =
      (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    return promedio.toFixed(2); // Redondear a 2 decimales
  }

  

  guardarEstudiante(
    id: string,
    nom: string,
    nota1: string,
    nota2: string,
    nota3: string,
    promedio: string
  ) {
    const ide: number = parseInt(id);
    const promGuardado = this.calcularPromedio(nota1, nota2, nota3);
    const tem = {
      id: ide,
      nombre: nom,
      nota_1: parseFloat(nota1),
      nota_2: parseFloat(nota2),
      nota_3: parseFloat(nota3),
      promedio: parseFloat(promGuardado),
    };

    this.servicio.postEstudiante(tem).subscribe();
  }
  actualizarEstudiante(
    id: string,
    nom: string,

    nota1: string,
    nota2: string,
    nota3: string,
    promedio: string
  ) {
    const ide: number = parseInt(id);
    const promActulizado = this.calcularPromedio(nota1, nota2, nota3);
    const tem = {
      id: ide,
      nombre: nom,

      nota_1: parseFloat(nota1),
      nota_2: parseFloat(nota2),
      nota_3: parseFloat(nota3),
      promedio: parseFloat(promActulizado),
    };

    this.servicio.putEstudiante(tem, ide).subscribe();
  }



  eliminarEstudiante(id: string) {
    const ide: number = parseInt(id);
    this.servicio.deleteEstudiante(ide).subscribe();
  }
}
