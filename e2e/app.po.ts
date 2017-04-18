import { browser, element, by } from 'protractor';

export class Ep110TilPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('til-root h1')).getText();
  }
}
