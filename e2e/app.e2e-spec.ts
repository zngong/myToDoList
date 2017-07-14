import { MyToDoListPage } from './app.po';

describe('my-to-do-list App', () => {
  let page: MyToDoListPage;

  beforeEach(() => {
    page = new MyToDoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
