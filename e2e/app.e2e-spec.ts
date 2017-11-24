import { LMSAngularPage } from './app.po';

describe('lms-angular App', () => {
  let page: LMSAngularPage;

  beforeEach(() => {
    page = new LMSAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
