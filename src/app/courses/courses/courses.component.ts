import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    {_id: "1", name: "angular", category: "front-end"}
  ];
  displayedColumns = ['name', 'category'];

  constructor(){

  }
}
