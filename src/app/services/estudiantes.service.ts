import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor(private http: HttpClient) {}

  //private API_ESTUDIANTES = 'http://localhost:3000/estudiantes';

   private API_ESTUDIANTES='http://192.168.1.8:9090/estudiantes';
  getEstudiante(): Observable<any> {
    return this.http.get(this.API_ESTUDIANTES);
  }

  postEstudiante(user: any): Observable<any> {
    return this.http.post(this.API_ESTUDIANTES, user);
  }

  putEstudiante(user: any, id: number): Observable<any> {
    const url = `${this.API_ESTUDIANTES}/${id}`;
    return this.http.put(url, user);
  }

  deleteEstudiante(id: number): Observable<any> {
    const url = `${this.API_ESTUDIANTES}/${id}`;
    return this.http.delete(url);
  }

  /* putEstudiante(user: any, id:number): Observable <any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${user.id}`
    
    return this.http.put(this.API_ESTUDIANTES, user)
  }
  deleteEstudiante(id: number): Observable <any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${id}`
    return this.http.delete(this.API_ESTUDIANTES)
  }*/
}
