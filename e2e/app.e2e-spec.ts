import { AssignmentgitPage } from './app.po';

describe('assignmentgit App', () => {
  let page: AssignmentgitPage;

  beforeEach(() => {
    page = new AssignmentgitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
