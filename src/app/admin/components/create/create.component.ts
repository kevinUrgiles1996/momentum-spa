import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
import { CauseService } from '@core/services/cause/cause.service';
import { Cause } from '@core/interfaces/cause.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  causeForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  urlImage = 'https://eralberta.ca/wp-content/uploads/2019/05/placeholder-image-300x200.jpg';

  constructor(
    private formBuilder: FormBuilder,
    private causeService: CauseService,
    private storage: AngularFireStorage
    ) {
      this.buildForm();
  }

  buildForm(){
    this.causeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      charityName: ['', Validators.required],
      imageUrl: ['', Validators.required],
      peopleLimit: [
        20,
        [Validators.required, Validators.min(10), Validators.max(50)],
      ],
      reward: ['', Validators.required],
    });
  }

  createCause(event: Event){
    event.preventDefault();
    if (this.causeForm.valid){
      const { name, description, charityName, imageUrl, peopleLimit, reward } = this.causeForm.value;
      const newCause: Cause = {name, description, charityName, imageUrl, peopleLimit, reward };
      console.log(newCause);
      this.causeService.createCause(newCause)
        .subscribe((result: { success: boolean, data: any }) => {
          const { success, data } = result;
          if (success){
            this.successMessage = 'Se ha creado una nueva causa';
            this.causeForm.reset();
          }
        });
    }
  }

  uploadFile(event){
    this.urlImage = './../../../../assets/images/spinner.gif';
    const file = event.target.files[0];
    const { type, name: fileName } = file;
    const validFormat = type === 'image/jpg' || type === 'image/jpeg' || type === 'image/png';
    if (validFormat){
      const dir = `images/admin/${fileName}`;
      const fileRef = this.storage.ref(dir);
      const task = this.storage.upload(dir, file);
      task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL()
            .subscribe((url) => {
              if (url){
                this.urlImage = url;
                this.causeForm.get('imageUrl').setValue(url);
              }
            });
        })
      )
      .subscribe();
    } else{
      this.errorMessage = 'El formato de archivo no es válido';
      setTimeout(() => this.errorMessage = '', 3000);
    }

  }

  ngOnInit(): void {}
}
