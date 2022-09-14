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
} from '../support/app.po';

describe('todos-task', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Task overview card with title', () => {
    getTaskPanel().get('nz-card .project-cards p').contains('Task Overview');
  });

  it('should display Task to be completed title', () => {
    getTaskOverviewPanel().get('p').contains('Task to be completed');
  });

  it('should display Task to be completed value', () => {
    getAddProjectInput().type('project{enter}');
    getAddTaskInput().type('task{enter}');
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('1');
  });

  it('should display Task completed title', () => {
    getTaskOverviewPanel().contains('p', 'Task Completed');
  });

  it('should display Task completed value', () => {
    getAddProjectInput().type('project{enter}');
    getAddTaskInput().type('task{enter}');
    cy.get('#task-item-checkbox-0').click();
    getTaskOverviewPanel().get('#task-completed-count').contains('1');
  });

  it('should display new Task item', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task{enter}');
    getTaskListItems().should((p) => expect(p.length).equal(1));
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('1');
  });

  it('should display new Task completed count', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task {enter}');
    getTaskListItems().get('.ant-checkbox-input').last().click();
    getTaskOverviewPanel().get('#task-completed-count').contains('1');
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('0');
  });

  it('should display on five clock icons on task input', () => {
    getTaskListInput()
      .get('ul > li')
      .should((t) => expect(t.length).equal(5));
  });

  it('should highlight clocks when mouse hover', () => {
    getTaskListInput().type('task');
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');
    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);
  });

  it('should not highlight all clocks when mouse leave', () => {
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseleave');
    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=outline]')
      .should('have.length', 5);
  });

  it('should highlight clocks when clock selected', () => {
    getTaskListInput().type('project');
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput().get('.clock-list > :nth-child(3)').click();

    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseleave');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);
  });

  it('should reset highlight clocks even clock selected on mouseover', () => {
    getTaskListInput().type('task');
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput().get('.clock-list > :nth-child(3)').click();

    getTaskListInput().get('.clock-list > :nth-child(2)').trigger('mouseover');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 2);
  });

  it('should update highlight clocks when clock selected', () => {
    getTaskListInput().type('task');
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput().get('.clock-list > :nth-child(2)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 2);
  });

  it('should unselect all clocks if only one clock selected', () => {
    getTaskListInput().get('.clock-list > :nth-child(1)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput().get('.clock-list > :nth-child(1)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });
  it('should unselect all clocks if only one clock selected', () => {
    getTaskListInput().get('.clock-list > :nth-child(1)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput().get('.clock-list > :nth-child(1)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should add new task with clocks', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task');
    getTaskListInput().get('.clock-list > :nth-child(2)').click();

    getTaskListInput().type('{enter}');

    getTaskListItems().should((p) => expect(p.length).equal(1));

    getTaskListItems().get(':nth-child(1) > ul > li > i[ng-reflect-nz-theme=outline]').should((p) => expect(p.length).equal(2));

    getTaskListInput()
      .get('.clock-list > ul > li >  i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should add new task with clocks and without clock', () => {
    getAddProjectInput().type('project{enter}');
    getTaskListInput().type('task');
    getTaskListInput().get('.clock-list > :nth-child(2)').click();

    getTaskListInput().type('{enter}');

    getTaskListItems().should((p) => expect(p.length).equal(1));

    getTaskListItems()
      .get(':nth-child(1) > ul > li > i')
      .should((p) => expect(p.length).equal(2));

    getTaskListInput().type('task {enter}');
    cy.get(':nth-child(7) > .ant-card-body i').should((p) =>
      expect(p.length).equal(0)
    );
  });

  it('should display tasks per projects', () => {
    getAddProjectInput().should('be.visible').type('project{enter}');

    getProjectItems()
      .get('.project-list > :nth-child(1) > .ant-card > .ant-card-body')
      .click();

    getAddTaskInput().type('task{enter}');
    getAddTaskInput().clear();

    getAddTaskInput().type('task{enter}');
    getAddTaskInput().clear();

    getAddProjectInput().should('be.visible').type('project{enter}');
    getAddProjectInput().clear();

    getAddTaskInput().type('task{enter}');
    getAddTaskInput().clear();

    getProjectItems()
      .get('.project-list > :nth-child(1) > .ant-card > .ant-card-body')
      .click();

    getTaskListItems().should((p) => expect(p.length).equal(2));

    getProjectItems()
      .get('.project-list > :nth-child(2) > .ant-card > .ant-card-body')
      .click();

    getTaskListItems().should((p) => expect(p.length).equal(1));
  });

  it('should disable clock mouse hover when no text on task input', () => {
    getTaskListInput().get('.clock-list > :nth-child(3)').trigger('mouseover');

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should disable clock mouse click when no text on task input', () => {
    getTaskListInput().get('.clock-list > :nth-child(3)').click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('ul > li > i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should display popup error when entering empty task name', () => {
    getTaskListInput().type('{enter}');
    cy.get('nz-input-group[ng-reflect-nz-status=error]').should('exist');
    cy.get(".ant-message").contains("Task Name can't be empty!");
  });

  it('should display popup error when entering task name with out selecting project', () => {
    getTaskListInput().type('task {enter}');
    cy.get(".ant-message").contains("Please select project!");
  });
});
