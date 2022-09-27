export const getProjectTitle = () => cy.get('p');
export const getProjectItems = () => cy.get('nz-card.project-items');
export const getProjectCard = () => cy.get('nz-card.project-card');
export const getAddProjectInput = () => cy.get('input#project');
export const getAddTaskInput = () => cy.get('#task-input');
export const getTaskPanel = () => cy.get('nz-card#task-panel');
export const getTaskOverviewPanel = () =>
  getTaskPanel().get('nz-card .project-cards');
export const getTaskListPanel = () => getTaskPanel().get('nz-card #task-panel');
export const getTaskListInput = () => getTaskPanel().get('nz-card #task-input');
export const getTaskListItems = () => getTaskPanel().get('nz-card .task-items');
export const getTaskList = () => getTaskPanel().get('.task-list');
export const getTaskCountdownTimer = () => getTaskPanel().get('#countdown-timer');
//https://docs.cypress.io/guides/guides/network-requests#Failures
