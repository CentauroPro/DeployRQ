import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  

  constructor(private http:HttpClient) { }

  private API_CURSOS='http://localhost:3000/profesores'

  getCurso():Observable <any>  {
    return this.http.get(this.API_CURSOS)
  }

  postCurso(user:any):Observable <any>  {
    return this.http.post(this.API_CURSOS, user)
  }

  putCurso(user:any, id:number): Observable <any>{
    this.API_CURSOS= `${this.API_CURSOS}/${user.id}` 
    return this.http.put(this.API_CURSOS, user)
  }
  deleteCurso(id: number): Observable <any>{
    this.API_CURSOS= `${this.API_CURSOS}/${id}`
    return this.http.delete(this.API_CURSOS)
  }
}