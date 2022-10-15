import {
  getAddProjectInput,
  getProjectCard,
  getProjectItems,
  getProjectTitle,
  getTaskListPanel,
  getTaskOverviewPanel,
  getTaskPanel,
  getTaskListInput,
  getTaskListItems,
  getAddTaskInput,
  getTaskList,
  getTaskCountdownTimer,
} from '../support/app.po';

describe('todos-task-countdown', () => {
  beforeEach(() => cy.visit('/'));

  it('should show active play icon', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task {enter}');
    getTaskListInput().get('.clock-list > :nth-child(3)').click();
    getTaskList().first().get('i[nztype=play-square]').click();
    getTaskList()
      .first()
      .get('i[nztype=play-square]')
      .should('have.attr', 'ng-reflect-nz-theme', 'twotone');
  });

  it('should show inactive play icon', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task {enter}');
    getTaskListInput().get('.clock-list > :nth-child(3)').click();
    getTaskList().first().get('i[nztype=play-square]').click();
    getTaskCountdownTimer().get('#stop-countdown').click();
    getTaskList()
      .first()
      .get('i[nztype=play-square]')
      .should('have.attr', 'ng-reflect-nz-theme', 'outline');
  });

  it('should toggle pause play button', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task {enter}');
    getTaskListInput().get('.clock-list > :nth-child(3)').click();
    getTaskList().first().get('i[nztype=play-square]').click();
    getTaskCountdownTimer().get('#pause-countdown').click();
    getTaskCountdownTimer()
      .get('#play-countdown')
      .should('have.id', 'play-countdown');

    getTaskCountdownTimer().get('#play-countdown').click();
    getTaskCountdownTimer()
      .get('#pause-countdown')
      .should('have.id', 'pause-countdown');
  });
  
  it('should start to count down', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task {enter}');
    getTaskListInput().get('.clock-list > :nth-child(3)').click();
    getTaskList().first().get('i[nztype=play-square]').click();
    getTaskCountdownTimer().get('#countdown-text').should('have.text', '23');
  });
});
