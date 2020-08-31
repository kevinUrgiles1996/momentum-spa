import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';

import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss']
})
export class UserPictureComponent implements OnInit {

  valid = false;
  imageFile: File;
  errorMessage: string;
  succesMessage: string;
  urlImage: string;

  constructor(
    private storage: AngularFireStorage,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  validateFile(event){
    const file = event.target.files[0];
    const { type } = file;
    const validFormat = type === 'image/jpg' || type === 'image/jpeg' || type === 'image/png';
    if (validFormat){
      this.imageFile = file;
    } else{
       this.errorMessage = 'El archivo seleccionado no tiene un formato válido';
    }
    this.valid = validFormat;
  }

  uploadFile(event: Event){
    this.urlImage = './../../../../assets/images/spinner.gif';
    event.preventDefault();
    if (this.valid){
      const dir = `images/profile/${this.imageFile.name}`;
      const fileRef = this.storage.ref(dir);
      const task = this.storage.upload(dir, this.imageFile);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL()
              .subscribe((url) => {
                if (url){
                  this.userService.updateUserDetails({ profileUrl: url })
                    .subscribe((result) => console.log(result));
                  this.succesMessage = 'Tu foto de perfil ha sido actualizada correctamente';
                  setTimeout(() => this.succesMessage = '', 3000);
                  this.urlImage = '';
                  document.querySelector('input').value = null;
                  this.valid = false;
                }
              });
          })
        )
        .subscribe();
    }
  }

}
