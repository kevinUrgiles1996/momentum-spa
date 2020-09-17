import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { ActivatedRoute, Params } from '@angular/router';
import { ReportService } from '@core/services/report/report.service';
import { CauseService } from '@core/services/cause/cause.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {

  wasSuccessful: boolean;
  goalId: string;
  causeId: string;
  goalName: string;
  reportForm: FormGroup;

  validFile = false;
  imageFile: File;
  imageUrl: string;
  errorMessage: string;
  successMessage: string;
  spinnerUrl: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar,
    private router: Router,
    private causeService: CauseService
  ) {
    this.buildForm();
    this.route.params.subscribe((params: Params) => {
      const { goalId } = params;
      this.goalId = goalId;
    });
  }

  ngOnInit(): void {
    this.reportForm.valueChanges.subscribe((changes) => {
      const { successful } = changes;
      if (successful) {
        this.wasSuccessful = true;
      } else {
        this.wasSuccessful = false;
      }
    });
    this.reportService.getTodayReport(this.goalId)
      .subscribe((result: any) => {
        console.log(result)
        const { name } = result.goalId;
        this.goalName = name;
      });
  }

  buildForm(){
    this.reportForm = this.formBuilder.group({
      successful: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  updateReport(event: Event){
    event.preventDefault();
    if (this.reportForm.valid){
      const { successful, comment } = this.reportForm.value;
      const body = {
        successful,
        imageUrl: this.imageUrl,
        comment
      };
      this.reportService.updateReport(this.goalId, body)
        .subscribe((result) => {
          console.log(result);
          this.snackBar.open('¡Acabas de reportar tu meta!', '', { duration: 2000 });
          this.router.navigate(['/']);
        });
    }
  }

  validateFile(event){
    const file = event.target.files[0];
    const { type } = file;
    const validFormat = type === 'image/jpg' || type === 'image/jpeg' || type === 'image/png';
    if (validFormat){
      this.imageFile = file;
    } else {
      this.errorMessage = 'El archivo seleccionado no tiene el formato válido';
    }
    this.validFile = validFormat;
    if (this.validFile){
      this.uploadFile();
    }
  }

  uploadFile(){
    this.spinnerUrl = './../../../../assets/images/spinner3.svg';
    const dir = `images/reports/${this.imageFile.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, this.imageFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL()
            .subscribe((url) => {
              if (url){
                this.imageUrl = url;
                this.successMessage = 'La foto ha sido subida con éxito';
                this.spinnerUrl = '';
                setTimeout(() => this.successMessage = '', 3000);
              }
            });
        })
      ).subscribe();
  }

}
