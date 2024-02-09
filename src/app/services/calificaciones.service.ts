import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  constructor(private http:HttpClient) { }

  private API_CALIFICACIONES='http://localhost:3000/profesores'

  getCalificacion():Observable <any>  {
    return this.http.get(this.API_CALIFICACIONES)
  }

  postCalificacion(user:any):Observable <any>  {
    return this.http.post(this.API_CALIFICACIONES, user)
  }
  putCalificacion(user: any, id:number): Observable <any>{
    this.API_CALIFICACIONES= `${this.API_CALIFICACIONES}/${user.id}`
    
    return this.http.put(this.API_CALIFICACIONES, user)
  }
  deleteCalificacion(id: number): Observable <any>{
    this.API_CALIFICACIONES= `${this.API_CALIFICACIONES}/${id}`
    return this.http.delete(this.API_CALIFICACIONES)
  }

}