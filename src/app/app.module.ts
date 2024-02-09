import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { FormProfesorComponent } from './components/form-profesor/form-profesor.component';
import { AdminProfesorComponent } from './components/admin-profesor/admin-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactosComponent,
    CarouselComponent,
    CursosComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    CalificacionesComponent,
    FormProfesorComponent,
    AdminProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
