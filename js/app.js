
const app = {
  route: () => {
    const hash = location.hash.replace('#', '');
    switch (hash) {
      case '':
      case 'home':
          app.ui(templates.home, 'home', content.home.main.head);
        break;
      case 'doc':
          app.ui(templates.doc, 'products', content.doc.head);
        break;
      default:
          app.ui(templates.default, '404', 'Not Found')
    }
  },
  ui: (html, template, title) => {
    document.querySelector('#container').innerHTML = html;
    tracker.onPage(template, title)
  },
  init: () => {
    app.route();
    window.onhashchange = app.route;
    tracker.init()
  }
};

app.init()
