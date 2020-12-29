

// TODO: Add nav burger for mobile

const app = {
  route: () => {
    const hash = location.hash.replace('#', '');
    switch (hash) {
      case '':
      case 'home':
          app.ui(templates.dynamic.home(), 'Home', content.home.head);
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
    document.title = title;
    document.querySelector('#container').innerHTML = html;
    window.scrollTo(0, 0);
    tracker.onPage(template, title)
  },
  init: () => {
    app.route();
    window.onhashchange = app.route;
    document.querySelector('header h1').innerHTML = content.site.name;
    templates.dynamic.nav();
    templates.dynamic.footer();
    tracker.init()
  }
};

app.init()
