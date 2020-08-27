import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { GoalService } from '@core/services/goal/goal.service';

import * as introJs from 'intro.js/intro.js';

import { Goal } from '@core/interfaces/goal.interface';
import { User } from '@core/interfaces/user.interface';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  user: User;
  goals: Goal[];
  activeGoals: Goal[] = [];
  inactiveGoals: Goal[] = [];
  successfulGoals = 0;
  totalGoals = 0;
  introJS = introJs();

  constructor(
    private authService: AuthService,
    private goalService: GoalService
  ) {
    this.introJS.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Aquí puedes ver la información de tu perfil',
          position: 'right',
        },
        {
          element: '#step2',
          intro: 'Consulta tus metas activas y terminadas',
          position: 'right',
        },
        {
          element: '#step3',
          intro: 'Modifica la visibilidad de la meta',
          position: 'right',
        },
        {
          element: '#step4',
          intro: 'Haz click aquí para agregar una nueva meta',
          position: 'left',
        },
        {
          element: '#step5',
          intro: 'Consulta notificaciones de reporte, débitos y recompensas',
          position: 'right',
        },
        {
          element: '#step6',
          intro: 'Lee publicaciones destacadas',
          position: 'right',
        },
      ],
      showProgress: true,
    });
  }

  ngOnInit(): void {
    this.authService.getUserInfo()
      .subscribe((result: { success: boolean, data: User }) => {
        const { data, success } = result;
        if (success){
          this.user = data;
        }
      });

    this.goalService.getPosts()
      .subscribe(a => {
        console.log('aaaaaaaaaaaaaa');
        console.log(a);
      })

    this.goalService.getUserGoals()
      .subscribe((result: { success: boolean, data: Goal[] }) => {
        const { data, success } = result;
        if (success){
          this.goals = data;
          this.calculateGoals(this.goals);
        }
      });


  }



  calculateGoals(goals: Goal[]){
    goals.forEach((goal) => {
      const { successful, active } = goal;
      if (successful){
        this.successfulGoals += 1;
      }
      if (active){
        this.activeGoals.push(goal);
      } else {
        this.inactiveGoals.push(goal);
      }
      this.totalGoals += 1;
    });
  }

  startTutorial() {
    this.introJS.start();
  }

}
