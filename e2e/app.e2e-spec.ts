import { Ep110TilPage } from './app.po';

describe('ep110-til App', () => {
  let page: Ep110TilPage;

  beforeEach(() => {
    page = new Ep110TilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('til works!');
  });
});
