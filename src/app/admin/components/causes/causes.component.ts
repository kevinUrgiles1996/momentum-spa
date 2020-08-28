import { Component, OnInit } from '@angular/core';

import { CauseService } from '@core/services/cause/cause.service';
import { Cause } from '@core/interfaces/cause.interface';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss'],
})
export class CausesComponent implements OnInit {

  causes: Cause[];

  constructor(
    private causeService: CauseService
  ) {}

  ngOnInit(): void {
    this.causeService.getCauses()
      .subscribe((result: { success: boolean, data: Cause[] }) => {
        const { success, data } = result;
        if (success){
          this.causes = data;
        }
      });
  }
}
