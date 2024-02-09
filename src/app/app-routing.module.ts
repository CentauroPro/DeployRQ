import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { FormProfesorComponent } from './components/form-profesor/form-profesor.component';
import { AdminProfesorComponent } from './components/admin-profesor/admin-profesor.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'cursos', component: CursosComponent},
  {path:'form-profesor', component: FormProfesorComponent},
  {path:'admin-profesor', component: AdminProfesorComponent},
  {path:'estudiantes', component: EstudiantesComponent},
  {path:'profesores', component: ProfesoresComponent},
  {path:'calificaciones', component: CalificacionesComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
