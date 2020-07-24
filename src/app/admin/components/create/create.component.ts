import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  causeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.causeForm = this.formBuilder.group({
      cause: ['', Validators.required],
      causeDescription: ['', Validators.required],
      charity: ['', Validators.required],
      causeImage: [''],
      people: [
        20,
        [Validators.required, Validators.min(10), Validators.max(50)],
      ],
      reward: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
