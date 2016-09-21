import { FirstProPage } from './app.po';

describe('first-pro App', function() {
  let page: FirstProPage;

  beforeEach(() => {
    page = new FirstProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
