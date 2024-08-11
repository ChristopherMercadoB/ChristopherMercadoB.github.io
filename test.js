// test.js
const { JSDOM } = require('jsdom');
const fs = require('fs');

test('Página HTML contiene "Hola Mundo"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    const dom = new JSDOM(html);
    const h1Text = dom.window.document.querySelector('h1').textContent;
    expect(h1Text).toBe('Hola Mundo');
});
