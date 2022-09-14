import {
  getAddProjectInput,
  getAddTaskInput,
  getProjectCard,
  getProjectItems,
  getProjectTitle,
  getTaskListInput,
  getTaskListItems,
  getTaskListPanel,
  getTaskOverviewPanel,
  getTaskPanel,
} from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display project title', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getProjectTitle().contains('Projects');
  });

  it('should display project items', () => {
    // Function helper example, see `../support/app.po.ts` file
    getAddProjectInput().should('be.visible').type('project {enter}');
    getAddProjectInput().should('be.visible').clear();
    getAddProjectInput().should('be.visible').type('project {enter}');
    getAddProjectInput().should('be.visible').clear();
    getAddProjectInput().should('be.visible').type('project {enter}');
    getAddProjectInput().should('be.visible').clear();
    getProjectItems().should((p) => expect(p.length).equal(3));
    getAddProjectInput().should('be.visible').type('project {enter}');
    getAddProjectInput().should('be.visible').clear();
    getProjectItems().should((p) => expect(p.length).equal(4));
  });

  it('should display project input', () => {
    // Function helper example, see `../support/app.po.ts` file
    getProjectCard().find('nz-input-group input#project');
  });

  it('should display project title on task', () => {
    getAddProjectInput().should('be.visible').type('project{enter}');
    getAddProjectInput().should('be.visible').clear();
    getProjectItems()
      .get('.project-list > :nth-child(1) > .ant-card > .ant-card-body')
      .click();
    getAddProjectInput().should('be.visible').clear();
    getTaskOverviewPanel()
      .get('.ant-card-body > .ant-input')
      .should('have.value', 'project');
  });

  it('should display popup error when entering empty project name', () => {
    getAddProjectInput().should('be.visible').type('{enter}');
    cy.get('nz-input-group[ng-reflect-nz-status=error]').should('exist');
    cy.get(".ant-message").contains("Project Name can't be empty!");
  });
});
