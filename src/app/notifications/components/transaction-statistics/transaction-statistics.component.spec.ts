import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatisticsComponent } from './transaction-statistics.component';

describe('TransactionStatisticsComponent', () => {
  let component: TransactionStatisticsComponent;
  let fixture: ComponentFixture<TransactionStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
