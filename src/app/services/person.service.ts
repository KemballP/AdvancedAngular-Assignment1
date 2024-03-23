import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  getPersonList(): Observable<Person[]> {
   const people = this.http.get<Person[]>('../../assets/data/person-data.json');
   return people;
  }
}
