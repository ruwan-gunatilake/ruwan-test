import { BReportExPage } from './app.po';

describe('b-report-ex App', () => {
  let page: BReportExPage;

  beforeEach(() => {
    page = new BReportExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
