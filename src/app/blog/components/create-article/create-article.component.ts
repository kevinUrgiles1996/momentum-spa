import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit{
  addressForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    starts: 0,
  });

  date: any;

  ngOnInit(){
    moment.locale('es');
    this.date = moment().format('dddd DD-MM-YYYY');
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
