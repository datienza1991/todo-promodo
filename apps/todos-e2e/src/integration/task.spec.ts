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
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('2');
  });

  it('should display Task completed title', () => {
    getTaskOverviewPanel().contains('p', 'Task Completed');
  });

  it('should display Task completed value', () => {
    getTaskOverviewPanel().get('#task-completed-count').contains('1');
  });

  it('should display new Task item', () => {
    getTaskListItems().should((t) => expect(t.length).equal(3));
    getTaskListInput().type('task {enter}');
    getTaskListItems().should((p) => expect(p.length).equal(4));
    getTaskListItems().contains('task 4');
  });

  it('should display new Task to be completed count', () => {
    getTaskListInput().type('task {enter}');
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('3');
  });

  it('should display new Task completed count', () => {
    getTaskListInput().type('task {enter}');
    getTaskListItems().get('.ant-checkbox-input').last().click();
    getTaskOverviewPanel().get('#task-completed-count').contains('2');
    getTaskOverviewPanel().get('#task-to-be-completed-count').contains('2');
  });

  it('should display on five clock icons on task input', () => {
    getTaskListInput()
      .get('div .clock')
      .should((t) => expect(t.length).equal(5));
  });

  it('should highlight clocks when mouse hover', () => {
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseover');
    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);
  });

  it('should not highlight all clocks when mouse leave', () => {
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseover');
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseleave');
    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=outline]')
      .should('have.length', 5);
  });

  it('should highlight clocks when clock selected', () => {
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseover');

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .click();

    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseleave');

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);
  });

  it('should reset highlight clocks even clock selected on mouseover', () => {
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseover');

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .click();

    getTaskListInput()
      .get('.ant-input-suffix :nth-child(2) > .anticon > svg')
      .trigger('mouseover');

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 2);
  });

  it('should update highlight clocks when clock selected', () => {
    getTaskListInput()
      .get('.ant-input-suffix :nth-child(3) > .anticon > svg')
      .trigger('mouseover');

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 3);

    getTaskListInput()
      .get('.ant-input-suffix :nth-child(2) > .anticon > svg')
      .click();

    getTaskListInput()
      .get('.project-cards > .ant-card-body')
      .click();

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 2);
  });

  it('should unselect all clocks if only one clock selected', () => {
    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(1) > .anticon > svg')
      .click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(1) > .anticon > svg')
      .click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });
  it('should unselect all clocks if only one clock selected', () => {
    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(1) > .anticon > svg')
      .click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(1) > .anticon > svg')
      .click();

    getTaskListInput().get('.project-cards > .ant-card-body').click();

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should add new task with clocks', () => {
    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(2) > .anticon > svg')
      .click();

    getTaskListInput().type('task {enter}');

    getTaskListItems().should((p) => expect(p.length).equal(4));

    cy.get(':nth-child(6) > .ant-card-body i').should((p) =>
      expect(p.length).equal(2)
    );

    getTaskListInput()
      .get('div .clock i[ng-reflect-nz-theme=twotone]')
      .should('have.length', 0);
  });

  it('should add new task with clocks and without clock', () => {
    getTaskListInput()
      .get('.ant-input-suffix > :nth-child(2) > .anticon > svg')
      .click();

    getTaskListInput().type('task {enter}');

    getTaskListItems().should((p) => expect(p.length).equal(4));

    cy.get(':nth-child(6) > .ant-card-body i').should((p) =>
      expect(p.length).equal(2)
    );

    getTaskListInput().type('task {enter}');
    cy.get(':nth-child(7) > .ant-card-body i').should((p) =>
    expect(p.length).equal(0)
  );
  });
});
