import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewComponent } from './home-view.component';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onAddProject() should add new #projects', () => {
    expect(component.projects.length).toEqual(2);
    component.onAddProject();
    expect(component.projects.length).toEqual(3);
  });

  it('#onAddProject() should add new #projects with project 3', () => {
    expect(component.projects[component.projects.length - 1].name).toContain(
      'project 2'
    );
    component.projectName = 'project 3';
    component.onAddProject();
    expect(component.projects[component.projects.length - 1].name).toContain(
      'project 3'
    );
  });
});
