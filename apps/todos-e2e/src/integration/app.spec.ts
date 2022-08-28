import {
  getAddProjectInput,
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
    getProjectItems().should((p) => expect(p.length).equal(3));
    getAddProjectInput().should('be.visible').type('project {enter}');
    getProjectItems().should((p) => expect(p.length).equal(4));
    getProjectItems().contains('project 4');
  });
  it('should display project input', () => {
    // Function helper example, see `../support/app.po.ts` file
    getProjectCard().find('nz-input-group input#project');
  });
  
});
