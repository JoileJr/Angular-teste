import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private snackbar: MatSnackBar,
    private location: Location,
    ){
    this.form = formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  onSubmit(){
    console.log("Enviou o formulario")
    this.coursesService.save(this.form.value).subscribe(result => this.onSucess(), error => {
      this.onError()
    })
  }

  onCancel(){
    console.log("Cancelou o envio")
    this.location.back()
  }

  private onError(){
    this.snackbar.open("Erro ao salvar curso", '', { duration: 5000})
  }

  private onSucess(){
    this.snackbar.open("Curso salvo com sucesso!", '', { duration: 5000})
    this.onCancel()
  }

}
