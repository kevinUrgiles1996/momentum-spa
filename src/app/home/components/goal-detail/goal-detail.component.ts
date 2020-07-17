import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
})
export class GoalDetailComponent implements OnInit {
  goal: any = {};
  goals: any[] = [
    {
      id: 1,
      title: 'Trotar 45 minutos',
      public: false,
      nextReportDate: '27 de Julio',
      currentWeek: 1,
      totalWeeks: 4,
    },
    {
      id: 2,
      title: 'Leer 20 minutos',
      public: true,
      nextReportDate: 'Hoy',
      currentWeek: 3,
      totalWeeks: 4,
    },
    {
      id: 3,
      title: 'Estudiar Algebra',
      public: true,
      nextReportDate: '',
      currentWeek: 6,
      totalWeeks: 6,
    },
    {
      id: 4,
      title: 'Dibujar',
      public: true,
      nextReportDate: '',
      currentWeek: 4,
      totalWeeks: 4,
    },
  ];

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { goalId } = params;
      this.getProduct(Number(goalId));
    });
  }

  getProduct(goalId: number) {
    this.goal = this.goals.find((goal) => goal.id === goalId);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `<h1 mat-dialog-title>Detalles de la meta</h1>
    <div mat-dialog-content>
      <p><strong>Fecha de inicio:</strong> 12/07/2020</p>
      <p><strong>Fecha de culminación:</strong> 20/07/2020</p>
      <p><strong>Duración:</strong> 9 Días</p>
      <p><strong>Reporte:</strong> Diario</p>
    </div>`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
