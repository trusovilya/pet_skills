import { PetAppPage } from './app.po';

describe('pet-app App', function() {
  let page: PetAppPage;

  beforeEach(() => {
    page = new PetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
