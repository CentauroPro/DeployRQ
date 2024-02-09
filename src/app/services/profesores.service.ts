import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http:HttpClient) { }

  private API_PROFESORES='http://localhost:3000/profesores'
 
  

  getProfesor():Observable <any>  {
    return this.http.get(this.API_PROFESORES)
  }

  postProfesor(user:any):Observable <any>  {
    return this.http.post(this.API_PROFESORES, user)
  }
  putProfesor(user: any, id:number): Observable <any>{
    this.API_PROFESORES= `${this.API_PROFESORES}/${user.id}`
    
    return this.http.put(this.API_PROFESORES, user)
  }
  deleteProfesor(id: number): Observable <any>{
    this.API_PROFESORES= `${this.API_PROFESORES}/${id}`
    return this.http.delete(this.API_PROFESORES)
  }

}