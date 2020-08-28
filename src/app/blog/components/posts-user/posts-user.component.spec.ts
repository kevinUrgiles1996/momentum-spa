import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUserComponent } from './posts-user.component';

describe('PostsUserComponent', () => {
  let component: PostsUserComponent;
  let fixture: ComponentFixture<PostsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
