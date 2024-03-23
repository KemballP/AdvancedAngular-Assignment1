import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Observable, map } from 'rxjs';
import { Person } from '../../models/person.model';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit{

  personList$!:Observable<Person[]>;
  constructor(private personService:PersonService){}

  ngOnInit(): void {
    this.personList$ = this.personService.getPersonList().pipe(map((people)=>{
      people.forEach(person=>{ let dateString = person.lastUpdated;
        person.lastUpdated = new Date(dateString)})
        return people
    })); //using map to ensure new date is created and not just a string.
  }
}
