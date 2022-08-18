import { getTaskListInput, getTaskListItems } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

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
      .get('.ant-input-suffix > :nth-child(1) > .anticon > svg')
      .click();

    getTaskListInput().type('task {enter}');

    getTaskListItems().should((p) => expect(p.length).equal(4));

    getTaskListItems()
      .get(':nth-child(6) > .ant-card-body')
      .get('div .clock')
      .should((p) => expect(p.length).equal(1));
  });
});
