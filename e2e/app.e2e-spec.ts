import { AppPage } from './app.po';

describe('starwars App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display icc text msg', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test for ICC, make by Richard Matheus.');
  });
});
