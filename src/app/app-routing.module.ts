import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FormEstudiantesComponent } from './components/form-estudiantes/form-estudiantes.component';
import { LisestudianteComponent } from './components/lisestudiante/lisestudiante.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  {path:'formEstudiantes/:id', component:FormEstudiantesComponent},
  {path:'lisEstudiantes', component:LisestudianteComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
