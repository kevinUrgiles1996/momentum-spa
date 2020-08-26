import { Component, OnInit, Input } from '@angular/core';

interface User {

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Input() successfulGoals: number;
  @Input() totalGoals: number;

  constructor() {}

  ngOnInit(): void {

  }


}
