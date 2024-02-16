import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LisEstudiantesService {

  constructor(private http: HttpClient) { }
 private API_LIST ='http://192.168.1.8:9090/estudiantes';
 getList(): Observable<any> {
  return this.http.get(this.API_LIST);
}

postList(user: any): Observable<any> {
  return this.http.post(this.API_LIST, user);
}

putList(user: any, id: number): Observable<any> {
  const url = `${this.API_LIST}/${id}`;
  return this.http.put(url, user);
}

deleteList(id: number): Observable<any> {
  const url = `${this.API_LIST}/${id}`;
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



