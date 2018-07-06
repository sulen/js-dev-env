import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom

describe('example test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

describe('index.html', () => {
  it('should have h1 containing "Users"', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);

    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).toEqual('Users');
    window.close();

  });
});
