import { Component, OnInit, Input } from '@angular/core';

import { User } from '@core/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() successfulGoals: number;
  @Input() totalGoals: number;

  constructor() {}

  ngOnInit(): void {

  }


}
