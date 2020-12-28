
const app = {
  route: () => {
    const hash = location.hash.replace('#', '');
    switch (hash) {
      case '':
      case 'home':
          app.ui(templates.home.dynamic(), 'Home', content.home.title);
        break;
      case 'documentation':
          app.ui(templates.doc, 'Documentation', content.doc.head);
        break;
      case 'about':
          app.ui(templates.about, 'About', content.about.main.head);
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
